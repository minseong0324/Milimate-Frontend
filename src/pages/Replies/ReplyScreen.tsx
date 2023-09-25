import React, {useEffect, useState} from "react";
import {s} from "./style";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";
import {BiChevronLeft} from "react-icons/bi";

type ReplyScreenProps = {
    day: string;

};

interface Reply {
    senderName: string;
    replyContent: string;
}

interface QuestionData {
    todayQuestion: string;
    replies: Reply[];
}

function ReplyScreen({day}: ReplyScreenProps) {
    const {state} = useLocation();
    const {accessToken, refreshToken} = useToken();

    console.log(state.day);
    console.log(state.question);
    const [questionData, setQuestionData] = useState<QuestionData | null>(null);
    //const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    const userId = localStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(true); // 초기값을 true로 설정
    const testString =
        "안녕 히주야!  잘지내고 있어??ㅠㅠㅠ\n" +
        "입대하고 첫주라 많이 힘들었지... 너무 보고싶다\n" +
        "밥은 잘먹고 있는거지 우리 히주 라면 좋아하는데\n" +
        "맛있는거 나와서 먹고 힘냈으면 좋겠다.\n" +
        "빨리 휴가 나와서 만나자~~\"안녕 히주야!  잘지내고 있어??ㅠㅠㅠ\\n\" +\n" +
        "        \"입대하고 첫주라 많이 힘들었지... 너무 보고싶다\\n\" +\n" +
        "        \"밥은 잘먹고 있는거지 우리 히주 라면 좋아하는데\\n\" +\n" +
        "        \"맛있는거 나와서 먹고 힘냈으면 좋겠다.\\n\" +\n" +
        "        \"빨리 휴가 나와서 만나자~~\"안녕 히주야!  잘지내고 있어??ㅠㅠㅠ\\n\" +\n" +
        "        \"입대하고 첫주라 많이 힘들었지... 너무 보고싶다\\n\" +\n" +
        "        \"밥은 잘먹고 있는거지 우리 히주 라면 좋아하는데\\n\" +\n" +
        "        \"맛있는거 나와서 먹고 힘냈으면 좋겠다.\\n\" +\n" +
        "        \"빨리 휴가 나와서 만나자~~\"안녕 히주야!  잘지내고 있어??ㅠㅠㅠ\\n\" +\n" +
        "        \"입대하고 첫주라 많이 힘들었지... 너무 보고싶다\\n\" +\n" +
        "        \"밥은 잘먹고 있는거지 우리 히주 라면 좋아하는데\\n\" +\n" +
        "        \"맛있는거 나와서 먹고 힘냈으면 좋겠다.\\n\" +\n" +
        "        \"빨리 휴가 나와서 만나자~~";

    useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true); // 데이터를 가져오기 시작할 때 로딩 상태로 설정
                try {
                    const response = await axios.get(
                        `https://api.mili-mate.com/api/user/${userId}/questionList/${state.day}`,
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
            // fetchData();
        } //[day, accessToken]);
        , []);


    const navigate = useNavigate();
    const goBackBtn = () => {
        navigate(-1);
    };
    return (
        <s.Wrapper>

            <s.IconLayout>
                <s.ButtonDesign onClick={goBackBtn}>
                    <BiChevronLeft size={36} color="black"/>

                </s.ButtonDesign>
                <s.TitleText>밀리메이트의 답변</s.TitleText>
                <s.ButtonDesign onClick={()=>{}}>
                <BiChevronLeft size={36} color="#f2f1ee"/>
                </s.ButtonDesign>
            </s.IconLayout>
            {/* Today's Question */}
            <s.SoldierTagContainer>
                <s.DayText>{state.day}</s.DayText>
                {/*<s.QuestionText>{state.question}</s.QuestionText>*/}
                <s.QuestionText>{state.question}</s.QuestionText>
                <s.SoldierTagImage/>
            </s.SoldierTagContainer>

            {/* Replies */}
            {/*{questionData?.replies.map((reply, index) => (*/}
            {/*    <s.BubbleReplyContainer key={index}>*/}
            {/*        <s.BubbleReplyImage/>*/}
            {/*        <s.BubbleReplyText>*/}
            {/*            <h2>{reply.senderName}</h2>*/}
            {/*            <p>{reply.replyContent}</p>*/}
            {/*        </s.BubbleReplyText>*/}
            {/*    </s.BubbleReplyContainer>*/}
            {/*))}*/}
            <s.ReplyContainer>
                <s.ContentText>{testString}</s.ContentText>
                <s.SenderText>From.우뎡</s.SenderText>

            </s.ReplyContainer>

        </s.Wrapper>
    );
}

export default ReplyScreen;
