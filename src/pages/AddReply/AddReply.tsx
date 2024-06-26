import React, {useEffect, useState} from "react";
import {s} from "./style";
import axios, {AxiosError} from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../../components/Redux/store";

interface Data {
    userName: string,
    todayQuestion: string,
    day: string
}

function AddReply() {
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    //const [sender, setSender] = useState("");
    //const [reply, setReply] = useState("");//
    const [formData, setFormData] = useState({
        sender: "",
        reply: "",
    });
    const [data, setData] = useState<Data>()
    const navigate = useNavigate();
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
            if(!formData.sender || !formData.reply) {
                alert("답변 혹은 이름을 모두 입력해주세요!")
                return;
            }
            const response = await axios.post(
                `https://api.mili-mate.com/api/guest/${userId}/reply`,
                {
                    senderName: formData.sender,
                    replyContent: formData.reply,
                    color: selectedColorString
                },
            );
            if (response.status === 200) {
                alert("답변을 다는 것에 성공했어요!");
                navigate(`/guest/${userId}`);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const status = error?.response?.status;
                alert("답변을 다는 데에 실패했습니다.");

                if (status === 404) {
                    // 리소스를 찾을 수 없음
                } else if (status === 500) {
                    // 서버 내부 오류
                } else {
                    // 기타 상태 코드 처리
                }
            }
            return null;
        }
    };

    const [selectedColor, setSelectedColor] = useState<string>('white');
    const [selectedColorString, setSelectedColorString] = useState('white');
    const selectColorBtn = (color: string, colorString: string) => {

        setSelectedColorString(colorString);
        setSelectedColor(color);
    }

    const handleNavigate = () => {
        navigate(`/guest/${userId}`);
    }
    return (
        <>
            <s.BackButton onClick={handleNavigate}/>

            <s.BackgroundContainer>

                <s.Container>
                    <s.Text>
                        오늘의 질문
                    </s.Text>
                </s.Container>
                <s.Wrapper>

                    <s.SoldierTagContainer>
                        {data ? <>
                            <s.DayText>{data.day}</s.DayText>
                            

                            {/*<s.QuestionText>{state.question}</s.QuestionText>*/}
                            <s.QuestionText>{data.todayQuestion}</s.QuestionText>
                        </> : <>
                            <s.DayText></s.DayText>

                            <s.QuestionText></s.QuestionText>

                        </>
                        }
                        <s.SolierTagLine/>
                        <s.SoldierTagImage/>
                    </s.SoldierTagContainer>
                    <s.ReplyContainer backgroundColor={selectedColor}>
                        <s.ReplyText
                            name="reply"
                            value={formData.reply}
                            onChange={handleInputChange}
                            placeholder="질문에 대한 답을 적어주세요."
                        ></s.ReplyText>
                        <s.SenderDiv>
                            <s.SenderNameFrom>From.</s.SenderNameFrom>
                            <s.SenderReplyText
                                name="sender"
                                value={formData.sender}
                                onChange={handleInputChange}
                                placeholder="이름을 입력해주세요."
                                maxLength={5}
                            ></s.SenderReplyText>
                        </s.SenderDiv>
                    </s.ReplyContainer>
                    <s.SelectColorDiv>
                        <s.RoundButton onClick={() => selectColorBtn("#FFDED9", "pink")}
                                       backgroundColor="#FFDED9"></s.RoundButton>
                        <s.RoundButton onClick={() => selectColorBtn("#F6EC93", "yellow")}
                                       backgroundColor="#F6EC93"></s.RoundButton>
                        <s.RoundButton onClick={() => selectColorBtn("#C8D4FF", "blue")}
                                       backgroundColor="#C8D4FF"></s.RoundButton>
                        <s.RoundButton onClick={() => selectColorBtn("#A7C87E", "green")}
                                       backgroundColor="#A7C87E"></s.RoundButton>
                        <s.RoundButton onClick={() => selectColorBtn("#FEFCFC", "white")}
                                       backgroundColor="#FEFCFC"></s.RoundButton>
                    </s.SelectColorDiv>
                    <s.ButtonStyle onClick={onSubmit}>등록하기</s.ButtonStyle>
                </s.Wrapper>

            </s.BackgroundContainer>
        </>
    );
}

export default AddReply;
