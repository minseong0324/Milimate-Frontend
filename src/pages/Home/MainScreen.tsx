import React, {useEffect, useState} from "react";
import {s} from "./styled";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import ModalBasic from "src/components/SimpleModal/SimpleModal";
import {useToken} from "src/contexts/TokenProvider/TokenProvider";
import {useSelector} from "react-redux";
import {RootState} from "../../components/Redux/store";
import {MdPersonOutline} from "react-icons/md";
import {FiUpload} from "react-icons/fi";
import Slider, {Settings} from "react-slick";

import {AiOutlineUnorderedList} from "react-icons/ai";

interface ResponseData {
    userName: string;
    year: number;
    month: number;
    day: number;
    nowData: number;
    endDate: number;
    todayQuestion: string;
    isInsertedEndDate: boolean;
    isRead: string,
}

//read 1) unRead, read, none
interface Reply {
    senderName: string;
    replyContent: string;
}

interface EnvelopeData {
    replies: Reply[];
}


function MainScreen() {
    const [SlideData, setSLideData] = useState<EnvelopeData[] | null>(null);
    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // 이 부분을 추가하세요.
    };

    const userId = localStorage.getItem("userId");
    const userInfo = useSelector((state: RootState) => state.userInfo);
    const [lastCompletionDate, setLastCompletionDate] = useState("0");
    const [data, setData] = useState<ResponseData | null>(null);
    const location = useLocation();
    const {accessToken, refreshToken} = useToken();
    const navigate = useNavigate();

    const dummyData: EnvelopeData = {
        "replies": [
            {
                "senderName": "김건휘",
                "replyContent": "첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지" +
                    "내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편" +
                    "지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번" +
                    "째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 " +
                    "편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용첫번째 편지내용"
            },
            {
                "senderName": "가슴준",
                "replyContent": "두번째 편지 내용"
            },
            {
                "senderName": "김민성",
                "replyContent": "세번째 편지 내용"
            },
            {
                "senderName": "가슴준",
                "replyContent": "4번재 편지 내용"
            }
        ]
    };
    const handleCopyClipBoard = async () => {
        const linkToShare = `https://mili-mate.com/guest/${userId}`;
        console.log(linkToShare);
        try {
            await navigator.clipboard.writeText(linkToShare);
            console.log(linkToShare);
            setModalOpen(true); // 모달창 띄우기
        } catch (err) {
            console.log(err);
        }
    };

    // const testToken = async () => {
    //   const userId = await localStorage.getItem("userId");
    //   console.log(userId);
    //   if (userId == null) {
    //     console.log("널 판단");
    //   }
    // };
    // testToken();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.mili-mate.com/api/user/${userId}/home`,
                    {
                        headers: {
                            authorization: `${accessToken}`,
                        },
                    }
                );
                const responseData: ResponseData = {
                    ...response.data,
                    year: Number(response.data.year),
                    month: Number(response.data.month),
                    day: Number(response.data.day),
                    nowDate: Number(response.data.nowDate),
                    endDate: Number(response.data.endDate),
                    isInsertedEndDate: response.data.insertedEndDate,
                    todayQuestion: response.data.todayQuestion,
                };
                alert(response.data.todayQuestion);
                setData(responseData); // 형변를환된 응답 데이터 상태에 할당
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [accessToken]);
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };
    const questionClick = (day: string) => {
        console.log("이벤트");
        navigate(`/replyscreen`, {state: {day}});
    };

    const profileImgClick = () => {
        navigate("/mypage");
    };

    const intendAddCompletion = () => {
        navigate("/mypage");
    };
    const navigateQuestionListScreen = async (nowDate: number) => {
        navigate(`/questionListScreen/${userId}`, {state: {nowDate}});
    };

    return (
        <>
            <s.WrapperLayout>
                <s.AppBarWrapperDiv>
                    <s.AppBarTitleText>MILLI MATE</s.AppBarTitleText>
                    <div>
                        <MdPersonOutline onClick={() => {
                            profileImgClick()
                        }} size={32} color={'#4c544b'} style={{marginRight: 16}}></MdPersonOutline>
                        <AiOutlineUnorderedList onClick={() => {
                            //navigateQuestionListScreen(data!.nowData);
                            navigateQuestionListScreen(1);

                        }} size={32} color={'#4c544b'}
                                                style={{marginRight: 16}}></AiOutlineUnorderedList>
                    </div>
                </s.AppBarWrapperDiv>
                <s.MainContent>
                    <s.D_dayText>D-30</s.D_dayText>
                    <s.MainContentText>훈련병이 된지 1주 째입니다.</s.MainContentText>
                    <s.MainContentText>해주고 싶은 말이 있나요?</s.MainContentText>
                    <s.SadCharImg></s.SadCharImg>
                    <div style={{flexDirection: "row", display: 'flex', marginBottom: 16}}>
                        <s.MainContentText>귀염둥이 김민성</s.MainContentText>
                        <s.NormalText> 훈령병</s.NormalText>
                    </div>
                </s.MainContent>
                <s.ShareBtnDiv  onClick={handleCopyClipBoard}>
                    <p>오늘의 질문 공유하기</p>
                    <FiUpload size={24} style={{marginLeft: 12}}></FiUpload>
                </s.ShareBtnDiv>
                {/*<s.Envelope></s.Envelope>*/}
                {/*<s.ExistEnvelope></s.ExistEnvelope>*/}
                <s.EnvelopeDiv>
                    <Slider {...settings}>
                        {dummyData.replies.map((item: Reply, index: number) => (
                            <div key={index} style={{width: '100%'}}>
                                <s.ContentEnvelope></s.ContentEnvelope>
                                <s.CenteredText>{item.replyContent}</s.CenteredText>
                                <s.NameText>from. {item.senderName}</s.NameText>
                            </div>
                        ))}
                        {dummyData.replies.length === 4 && (
                            <s.EnvelopeDiv>

                                <s.ContentEnvelope></s.ContentEnvelope>
                                <s.CenteredText onClick={() => {
                                    questionClick("12")
                                }}>모두 확인하기
                                </s.CenteredText>
                                <s.NameText></s.NameText>

                            </s.EnvelopeDiv>
                        )}
                    </Slider>
                </s.EnvelopeDiv>
                <div style={{margin: 36}}></div>
            </s.WrapperLayout>


            {modalOpen && (
                <ModalBasic
                    setModalOpen={setModalOpen}
                    contentText="링크가 복사되었습니다."
                    modalType={0}
                />
            )}
        </>
    );
}

export default MainScreen;
