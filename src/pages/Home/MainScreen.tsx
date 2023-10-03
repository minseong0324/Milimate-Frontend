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
import copy from 'copy-to-clipboard';
import {AiOutlineUnorderedList} from "react-icons/ai";
import ServiceModal from '../../components/ServiceModal/ServiceModal'

interface ResponseData {
    userName: string;
    year: number;
    month: number;
    day: number;
    nowDate: number;
    endDate: number;
    todayQuestion: string;
    existNewRepl: boolean, //true, false //todayquestion이 존재한다. 그런다음 만약 이게 false면 질문은 있는데 그거에 대한 답변이 없는것, 만약 답변이 존재하면 밑으로 넘어감
    blur: boolean, 
    insertedEndDate: boolean;
    totalCount: number;
}

//read 1) unRead, read, none

interface Reply {
    senderName: string;
    replyContent: string;
    color: string;
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
    //const [data, setData] = useState<ResponseData>();
    const navigate = useNavigate();
    const [ddayCount, setDdayCount] = useState<number>(0);
    const [replies, setReplies] = useState<Reply[]>([]); // 상태 초기화
    const [isSmallModalOpen, setSmallModalOpen] = useState(false);
    const [modalSmallContent, setModalSmallContent] =
        useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장\
    const [isServiceModalOpen, setServiceModalOpen] = useState(false);
    const [totalCount, setTotalCount] = useState<number>(0);

function isTime1730(nowDate : number) {
    const now = new Date();
    if(nowDate > 61) {
        return true;

    } else if (nowDate == 61) {
        if( now.getHours() > 17 || (now.getHours() >= 17 && now.getMinutes() >= 30)) {
                return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
    const handleCopyClipBoard = async () => {
        const linkToShare = `https://mili-mate.com/guest/${userId}`;
        try {
            await navigator.clipboard.writeText(linkToShare);
            
        copy(`https://mili-mate.com/guest/${userId}`); //안드로이드 카카오톡 인앱 브라우저 이슈 대응
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

    useEffect(() => {
        // alert('토큰 테스트!')
        // alert(userId);
        // alert(accessToken)
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
                setBlur(response.data.blur);
                setData(responseData); // 형변를환된 응답 데이터 상태에 할당
                setDdayCount(responseData.endDate - responseData.nowDate);
                if(Number(response.data.endDate) <= 0 && isTime1730(Number(response.data.nowDate)) ) {
                    const getTotal = async () => {
                        try {
                            const response = await axios.get(
                                `https://api.mili-mate.com/api/user/${userId}/totalReplyCnt`,
                                {
                                    headers: {
                                        authorization: `${accessToken}`,
                                    },
                                }
                            );
                            setTotalCount(response.data.totalReplyCnt);
                            alert(response.data.totalReplyCnt);
                            alert(totalCount);
                        } catch (e) {
                            //  alert(e);
                            console.log(e);
                        }
                    }
                    getTotal();
                }
                //alert(data);
                if (response.data.existNewRepl) {
                    //alert(accessToken)
                    const fetchReplData = async () => {
                        try {
                            const replResponse = await axios.get(
                                `https://api.mili-mate.com/api/user/${userId}/home/repl`,
                                {
                                    headers: {
                                        authorization: `${accessToken}`,
                                    },
                                }
                            );
                            setReplies(replResponse.data.replies); // 데이터 저장

                        } catch (error) {
                            alert("데이터를 불러오는데 실패했습니다:");
                       //     alert(error);
                        }
                    };
                    fetchReplData(); // 함수 실행
                }
            } catch (e) {
                //  alert(e);
                console.log(e);
            }
        };

       
        fetchData();
        

    }, [accessToken, userId]);

    const closeModal = () => {
        setSmallModalOpen(false);
    };
    const randomNumber = Math.floor(Math.random() * 3) + 1; // 1, 2, 또는 3 캐릭터 이미지

    const questionClick = () => {
        navigate(`/questionlist/${userId}`);
    };

    const profileImgClick = () => {
        navigate("/mypage");
    };

    const intendAddCompletion = () => {
        navigate("/mypage");
    };
    const navigateQuestionListScreen = async (nowDate: number) => {
        navigate(`/questionlist/${userId}`, {state: {nowDate}});
    };
    const [blur, setBlur] = useState<boolean>(true);

//2. 클릭 이벤트 핸들러
    const handleEnvelopeClick = async () => {
        if (data?.blur) {
            try {
                await axios.put(
                    `https://api.mili-mate.com/api/user/${userId}/home/blur`,
                    {blur: false},
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



        const slides = [];
        if(replies ) {
        for (let i = 0; i < replies.length; i++) {
            
            if(i >= 4) {
                break;
            }
        
            slides.push(
                <s.SlideWrapper key={i}>
                    {/* Assuming s is your styled components object */}
                    <s.ContentEnvelope></s.ContentEnvelope>
                        <s.CenteredText blur={blur}>{replies[i].replyContent}</s.CenteredText>
                        <s.NameText blur={blur}>from. {replies[i].senderName}</s.NameText>
                    </s.SlideWrapper>
                );
        
        
        }
        
            slides.push(
                <s.SlideWrapper key={replies.length}>
                    <s.ContentEnvelope></s.ContentEnvelope>
                    <s.CenteredText onClick={() => questionClick()}>
                        모두 확인하기
                    </s.CenteredText>
                    <s.NameText></s.NameText>
                </s.SlideWrapper>
            );
        }

    const ServiceModalOpen = () => {
        setServiceModalOpen(true);
    }


    return (
        <>
            <s.WrapperLayout>
                <s.AppBarWrapperDiv>
                    <s.MilimateLogo/>
                    <div>
                        <s.ServiceButton onClick={ServiceModalOpen}/>
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

                    {
                        data ? (
                            data.nowDate <= 0 ? (
                                <>

                                    {/*<s.MainContentText>입대까지</s.MainContentText>*/}
                                    <s.D_dayText>입대까지 D{data.nowDate - 1}</s.D_dayText>
                                    <s.MainContentText>입대 이후 질문이 생성됩니다! 미리 링크를 공유해 준비해두세요.</s.MainContentText>
                                </>
                            ) : data.nowDate > 0 && data.nowDate < 61 ? (
                                <>
                                    <s.D_dayText>D+{data.nowDate - 1}</s.D_dayText>
                                    <s.MainContentText>{data.todayQuestion}</s.MainContentText>
                                </>
                            ) : data.nowDate >= 61 && data.endDate <= 0 && isTime1730(data.nowDate) == true ? (
                                <>
                                    <s.D_dayText>수료를 축하드립니다!</s.D_dayText>
                                    <s.EndContentText>지금까지 {totalCount}개의 답변을 받으셨습니다.</s.EndContentText>
                                </>
                                
                            ) : <></>
                        ) : <></>
                    }

                    {data && (
                        !data.existNewRepl
                            ? <s.SadCharImg/>
                            : randomNumber === 1
                                ? <s.hearCharaImg1/>
                                : randomNumber === 2
                                    ? <s.hearCharaImg2/>
                                    : <s.hearCharaImg3/>
                    )}
                    {/*</>*/}


                    <s.NameContentDiv>
                        <s.MainContentText>{userInfo.userName}</s.MainContentText>
                        <s.NormalText> 훈련병</s.NormalText>
                    </s.NameContentDiv>
                </s.MainContent>

                <s.ShareBtnDiv onClick={handleCopyClipBoard}>
                    <p>오늘의 질문 공유하기</p>
                    <FiUpload size={24} style={{marginLeft: 12}}></FiUpload>
                </s.ShareBtnDiv>

                {/*<s.Envelope></s.Envelope>*/}
                {/*<s.ExistEnvelope></s.ExistEnvelope>*/}
                {
                    data ? (
                         !data.existNewRepl ? (
                             <s.EnvelopeDiv >
                                 <s.NoneEnvelope/>
                             </s.EnvelopeDiv>
                         ) : (
                            <>
        { blur && data.nowDate < 61 ?
            <s.TransparentEnvelopeDiv onClick={handleEnvelopeClick} blur={blur}>
                <s.EnvelopeDiv>
                    <Slider {...settings}>
                    {slides}
                    </Slider>
                </s.EnvelopeDiv>
            </s.TransparentEnvelopeDiv>
            :

            <s.EnvelopeDiv>
                <Slider {...settings}>
                {slides}
                </Slider>
            </s.EnvelopeDiv>
        }
    </>
                    )

                    ) : <s.EnvelopeDiv>
                        <s.NoneEnvelope/>
                    </s.EnvelopeDiv>
                }


                {/*<s.EnvelopeDiv onClick={handleEnvelopeClick}>*/}
                {/*    <Slider {...settings}>*/}

                {/*        <div style={{width: '100%',height:"100%", backgroundColor:"black"}}>*/}

                {/*                    <>*/}
                {/*                        <s.ContentEnvelope/>*/}
                {/*                        <s.CenteredText>sdgfhjsdgfhjdsgfhjdsgfhjsdgfhjdsgfhjgdjhfgsdjhfgjhsdgfjhsdgfhjgsdfjhgdsjhfgdsjhfgjhsdgfjhdsgfhjsdgfjhdsgfjhsdgfjsdgfjhsdgfjhdsgfjhsdgfjsdhgfjhdsgf</s.CenteredText>*/}
                {/*                        <s.NameText>from. 김건휘</s.NameText>*/}
                {/*                    </>*/}


                {/*        </div>*/}
                {/*    </Slider>*/}
                {/*</s.EnvelopeDiv>*/}

                <div style={{margin: 36}}></div>
            </s.WrapperLayout>


            <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)}>
                {modalSmallContent}
            </SmallModal>

            <ServiceModal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}/>

        </>
    )

}

export default MainScreen;
