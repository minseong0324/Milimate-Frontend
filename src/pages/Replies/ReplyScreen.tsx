import React, {useEffect, useState} from "react";
import {s} from "./style";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";

type ReplyScreenProps = {
    day: string;
    question: string;
};

interface Reply {
    senderName: string;
    replyContent: string;
}

interface QuestionData {
    todayQuestion: string;
    replies: Reply[];
}

function ReplyScreen({day, question}: ReplyScreenProps) {
    const {accessToken, refreshToken} = useToken();
    const {state} = useLocation();
    const [questionData, setQuestionData] = useState<QuestionData | null>(null);
    //const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    const userId = localStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(true); // 초기값을 true로 설정

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // 데이터를 가져오기 시작할 때 로딩 상태로 설정
            try {
                const response = await axios.get(
                    `https://api.mili-mate.com/api/user/${userId}/questionList/${day}`,
                    {
                        headers: {
                            authorization: `${accessToken}`,
                        },
                    }
                );
                setQuestionData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoading(false); // 데이터를 가져온 후 로딩 상태 해제
        };
        fetchData();
    } //[day, accessToken]);
    ,[]);


    const navigate = useNavigate();
    const goBackBtn = () => {
        navigate(-1);
    };
    return (
        <s.Wrapper>
            {isLoading ? (<div>Loading ... </div>)   :  (
                <>
            <s.IconLayout>
                <s.ButtonDesign onClick={goBackBtn}>
                    <FaRegArrowAltCircleLeft size={36} color="white"/>
                </s.ButtonDesign>
            </s.IconLayout>

            {/* Today's Question */}
            <s.BubbleContainer>
                <s.BubbleText>{questionData?.todayQuestion}</s.BubbleText>
                <s.BubbleImage/>
            </s.BubbleContainer>

            {/* Replies */}
            {questionData?.replies.map((reply, index) => (
                <s.BubbleReplyContainer key={index}>
                    <s.BubbleReplyImage/>
                    <s.BubbleReplyText>
                        <h2>{reply.senderName}</h2>
                        <p>{reply.replyContent}</p>
                    </s.BubbleReplyText>
                </s.BubbleReplyContainer>
            ))}
                </>)}
        </s.Wrapper>
    );
}

export default ReplyScreen;
