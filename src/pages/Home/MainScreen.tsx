import React, {useEffect, useState} from "react";
import {s} from "./styled";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import SmallModal from "src/components/ErrorModal/ErrorModal";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";
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
    nowDate: number;
    endDate: number;
    todayQuestion: string;
    existNewRepl: boolean, //true, false //todayquestion이 존재한다. 그런다음 만약 이게 false면 질문은 있는데 그거에 대한 답변이 없는것, 만약 답변이 존재하면 밑으로 넘어감감
    blur: string, //
    insertedEndDate: boolean;
    //isRead: string,
}

//read 1) unRead, read, none

interface Reply {
    senderName: string;
    replyContent: string;
}

interface RepliesResponse {
    replies: Reply[];
}

function MainScreen() {
    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //arrows: true, // 이 부분을 추가하세요.
    };
    //    const { accessToken, refreshToken } = useToken();
    const accessToken = localStorage.getItem("accessToken");
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    const userInfo = useSelector((state: RootState) => state.userInfo);
    const [data, setData] = useState<ResponseData | null>(null);
    const navigate = useNavigate();
    const [ddayCount, setDdayCount] = useState<number>(0);
    const [replies, setReplies] = useState<Reply[]>([]); // 상태 초기화
    const [isSmallModalOpen, setSmallModalOpen] = useState(false);
    const [modalSmallContent, setModalSmallContent] =
        useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장\

    const handleCopyClipBoard = async () => {
        const linkToShare = `https://mili-mate.com/guest/${userId}`;
        console.log(linkToShare);
        try {
            await navigator.clipboard.writeText(linkToShare);
            setSmallModalOpen(true)
            setModalSmallContent(
                <s.SmallCenterModalWrapper>
                    <s.SmallModalTextsWrapper2>링크가 복사되었습니다.</s.SmallModalTextsWrapper2>
                    <s.BtnDiv>
                        <s.OkBtnStyle onClick={closeModal}>확인</s.OkBtnStyle>
                    </s.BtnDiv>
                </s.SmallCenterModalWrapper>
            );
        } catch (err) {
            console.log(err);
        }
    };
//
    useEffect(() => {
        alert('토큰 테스트!')
        alert(userId);
        alert(accessToken)

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
                    insertedEndDate: response.data.insertedEndDate,
                    todayQuestion: response.data.todayQuestion,
                    blur: response.data.blur,
                    existNewRepl: response.data.existNewRepl,
                    userName: response.data.userName,

                };
                // alert(response.data.existNewRepl);
                // alert(response.data.todayQuestion);


                // setData(responseData); // 형변를환된 응답 데이터 상태에 할당
                // setDdayCount(responseData.endDate - responseData.nowDate);
                // if(response.data.existNewRepl) {
                //     //alert(accessToken)
                //     const fetchReplData = async () => {
                //         try {
                //             const response = await axios.get<RepliesResponse>(
                //                 `https://api.mili-mate.com/api/user/${userId}/home/repl`,
                //                 {
                //                     headers: {
                //                         authorization: `${accessToken}`,
                //                     },
                //                 }
                //             );
                //             setReplies(response.data.replies); // 데이터 저장
                //         } catch (error) {
                //             console.error("데이터를 불러오는데 실패했습니다:", error);
                //         }
                //     };
                //
                //     fetchReplData(); // 함수 실행
                // }
            } catch (e) {
                alert(e);
                console.log(e);
            }
        };
        fetchData();


    }, [accessToken, userId]);

    // if (data?.existNewRepl) {
    //     alert(accessToken)
    //     const fetchReplData = async () => {
    //
    //     };
    //
    //     fetchReplData(); // 함수 실행
    // } ///


    const closeModal = () => {
        setSmallModalOpen(false);
    };
    const randomNumber = Math.floor(Math.random() * 3) + 1; // 1, 2, 또는 3 캐릭터 이미지

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
    const [blur, setBlur] = useState(data?.blur === "true");

// 2. 클릭 이벤트 핸들러
    const handleEnvelopeClick = async () => {
        if (blur) {
            try {
                await axios.put(
                    `https://api.mili-mate.com/api/user/${userId}/home/blur`,
                    {blur: "false"},
                    {
                        headers: {
                            authorization: `${accessToken}`,
                        },
                    }
                );
                setBlur(false);
            } catch (error) {
                console.error("API 요청 오류:", error);
            }
        }
    };

// ...


    return (
        <>
            <s.WrapperLayout>
                <s.AppBarWrapperDiv>
                    <s.MilimateLogo/>
                    <div>
                        <MdPersonOutline onClick={() => {
                            profileImgClick()
                        }} size={24} color={'#4c544b'} style={{marginRight: 16}}></MdPersonOutline>
                        <AiOutlineUnorderedList onClick={() => {
                            //navigateQuestionListScreen(data!.nowData);
                            navigateQuestionListScreen(1);

                        }} size={24} color={'#4c544b'}
                                                style={{marginRight: 16}}></AiOutlineUnorderedList>
                    </div>
                </s.AppBarWrapperDiv>
                <s.MainContent>

                    <s.D_dayText>D-{ddayCount}</s.D_dayText>

                    <s.MainContentText>{data?.todayQuestion}</s.MainContentText>


                    {/*<s.MainContentText></s`.MainContentText>*/}
                    <>
                        {data && (
                            !data.existNewRepl
                                ? <s.SadCharImg/>
                                : randomNumber === 1
                                    ? <s.hearCharaImg1/>
                                    : randomNumber === 2
                                        ? <s.hearCharaImg2/>
                                        : <s.hearCharaImg3/>
                        )}
                    </>
                    <div style={{flexDirection: "row", display: 'flex', marginTop: 32, marginBottom: 32}}>
                        <s.MainContentText>{userInfo.userName}</s.MainContentText>
                        <s.NormalText> 훈련병</s.NormalText>
                    </div>
                </s.MainContent>
                <s.ShareBtnDiv onClick={handleCopyClipBoard}>
                    <p>오늘의 질문 공유하기</p>
                    <FiUpload size={24} style={{marginLeft: 12}}></FiUpload>
                </s.ShareBtnDiv>
                {/*<s.Envelope></s.Envelope>*/}
                {/*<s.ExistEnvelope></s.ExistEnvelope>*/}
                {data && !data.existNewRepl ?
                    <s.EnvelopeDiv onClick={handleEnvelopeClick}>
                        <s.NoneEnvelope/>
                    </s.EnvelopeDiv>
                    :

                    <s.EnvelopeDiv onClick={handleEnvelopeClick}>
                        <Slider {...settings}>
                            {replies.map((item: Reply, index: number) => (
                                <div key={index} style={{width: '100%'}}>
                                    {data && data.blur ?
                                        <>
                                            <s.ExistEnvelope></s.ExistEnvelope>
                                            <s.CenteredText>{item.replyContent}</s.CenteredText>
                                            <s.NameText>from. {item.senderName}</s.NameText>
                                        </>
                                        :
                                        <>
                                            <s.ContentEnvelope/>
                                            <s.CenteredText>{item.replyContent}</s.CenteredText>
                                            <s.NameText>from. {item.senderName}</s.NameText>
                                        </>
                                    }

                                </div>
                            ))}
                            {replies.length === 4 && (
                                <>
                                    <s.ContentEnvelope></s.ContentEnvelope>
                                    <s.CenteredText onClick={() => questionClick("12")}>
                                        모두 확인하기
                                    </s.CenteredText>
                                    <s.NameText></s.NameText>
                                </>
                            )}
                        </Slider>
                    </s.EnvelopeDiv>


                }

                <div style={{margin: 36}}></div>
            </s.WrapperLayout>


            <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)}>
                {modalSmallContent}
            </SmallModal>
        </>
    );
}

export default MainScreen;
