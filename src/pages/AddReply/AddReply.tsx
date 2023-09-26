import React, {useEffect, useState} from "react";
import {s} from "./style";
import axios, {AxiosError} from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal/ErrorModal'
import {BiChevronLeft} from "react-icons/bi";
import {userInfo} from "os";
import {useSelector} from "react-redux";
import {RootState} from "../../components/Redux/store";

interface Data {
    userName:string,
    todayQuestion: string,
    day : string
}
function AddReply() {
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    //const [sender, setSender] = useState("");
    //const [reply, setReply] = useState("");
    const [formData, setFormData] = useState({
        sender: "",
        reply: "",
    });
    const [data, setData]= useState<Data>()
    const navigate = useNavigate();
    const [errorModalContent, setModalErrorContent] = useState<React.ReactNode>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const userInfo = useSelector((state: RootState) => state.userInfo);

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.mili-mate.com/api/guest/${userId}/reply`,
                    {
                        data: {}
                    }
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }
        fetchData();
    }, []);
    const onSubmit = async () => {
        console.log(formData.sender);
        console.log(formData.reply);

        try {
            const response = await axios.post(
                `https://api.mili-mate.com/api/guest/${userId}/reply`,
                {
                    senderName: formData.sender,
                    replyContent: formData.reply,
                    color: selectedColor
                },
            );
            if (response.status === 200) {
                alert("답변을 다는 것에 성공했어요!");
                navigate(`/guest/${userId}`);
            }
            console.log(response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const status = error?.response?.status;
                alert("답변 달기 실패");
                setModalErrorContent(
                    <s.ErrorCenterModalWrapper>
                        <s.ErrorModalTextsWrapper2>답변을 다는 것에</s.ErrorModalTextsWrapper2>
                        <s.ErrorModalTextsWrapper2>실패했어요.</s.ErrorModalTextsWrapper2>
                        {/*<s.ButtonStyle onClick={handleErrorModalClose}>닫기</s.ButtonStyle>*/}
                    </s.ErrorCenterModalWrapper>
                );
                if (status === 404) {
                    // 리소스를 찾을 수 없음
                } else if (status === 500) {
                    // 서버 내부 오류
                } else {
                    // 기타 상태 코드 처리
                }
            }
            setModalOpen(true);
            return null;
        }
    };
    const handleErrorModalClose = () => {
        setModalOpen(false);
        navigate(`/guest/${userId}`);
    }
    const goBackBtn = () => {
        navigate(-1);
    };
    const [selectedColor, setSelectedColor] = useState<string>('white');

    const selectColorBtn = (color: string) => {
        setSelectedColor(color);
    }
    return (
        <>
            <s.Wrapper>
                <s.IconLayout>
                    <s.ButtonDesign onClick={goBackBtn}>
                        <BiChevronLeft size={24} color="#4c544b"/>
                    </s.ButtonDesign>
                    <s.TitleText>밀리메이트의 답변</s.TitleText>
                    <s.ButtonDesign onClick={() => {
                    }}>
                        <BiChevronLeft size={24} color="#f2f1ee"/>
                    </s.ButtonDesign>
                </s.IconLayout>
                <s.SoldierTagContainer>
                    {data ?<>
                        <s.DayText>{data.day}</s.DayText> :

                    {/*<s.QuestionText>{state.question}</s.QuestionText>*/}
                        <s.QuestionText>{data.todayQuestion}</s.QuestionText>
                        </> :<></>
                        }
                    <s.SoldierTagImage/>
                </s.SoldierTagContainer>
                <s.ReplyContainer backgroundColor={selectedColor}>
                    <s.ReplyText
                        name="reply"
                        value={formData.reply}
                        onChange={handleInputChange}
                        placeholder="질문에 대한 답을 적어주세요!!"
                    ></s.ReplyText>
                    <s.SenderDiv>
                        <s.SenderNameFrom>From.</s.SenderNameFrom>
                        <s.SenderReplyText
                            name="sender"
                            value={formData.sender}
                            onChange={handleInputChange}
                            placeholder="이름을 입력해주세요!"
                        ></s.SenderReplyText>
                    </s.SenderDiv>
                </s.ReplyContainer>
                <s.SelectColorDiv>
                    <s.RoundButton onClick={() => selectColorBtn("#fadfda")} backgroundColor="#fadfda"></s.RoundButton>
                    <s.RoundButton onClick={() => selectColorBtn("#f5ec9e")} backgroundColor="#f5ec9e"></s.RoundButton>
                    <s.RoundButton onClick={() => selectColorBtn("#cad4fc")} backgroundColor="#cad4fc"></s.RoundButton>
                    <s.RoundButton onClick={() => selectColorBtn("#adc786")} backgroundColor="#adc786"></s.RoundButton>
                    <s.RoundButton onClick={() => selectColorBtn("#ffffff")} backgroundColor="#ffffff"></s.RoundButton>
                </s.SelectColorDiv>
                <s.ButtonStyle onClick={onSubmit}>등록하기</s.ButtonStyle>
            </s.Wrapper>
            <ErrorModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {errorModalContent}
            </ErrorModal>
        </>
    );
}

export default AddReply;

