import React, { useEffect, useState } from "react";
import { s } from "./style";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
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

function ReplyScreen({ day, question }: ReplyScreenProps) {
  const { state } = useLocation();
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
 const accessToken = localStorage.getItem("accessToken"); 

  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      const response = await axios.get(
        `https://api.mili-mate.com/api/user/${userId}/questionList/${day}`,
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );
      setQuestionData(response.data);
    };
    fetchData();
  }, [day, accessToken]); // accessToken의 변경을 감지하기 위해 useEffect의 dependency 배열에 추가

  const questionText = "입대전 저는 어떤 사람이었나요?";

  const navigate = useNavigate();
  const goBackBtn = () => {
    navigate(-1);
  };
  return (
    <s.Wrapper>
      <s.IconLayout>
        <s.ButtonDesign onClick={goBackBtn}>
          <FaRegArrowAltCircleLeft size={36} color="white" />
        </s.ButtonDesign>
      </s.IconLayout>

      {/* Today's Question */}
      <s.BubbleContainer>
        <s.BubbleText>{questionData?.todayQuestion}</s.BubbleText>
        <s.BubbleImage />
      </s.BubbleContainer>

      {/* Replies */}
      {questionData?.replies.map((reply, index) => (
        <s.BubbleReplyContainer key={index}>
          <s.BubbleReplyImage />
          <s.BubbleReplyText>
            <h2>{reply.senderName}</h2>
            <p>{reply.replyContent}</p>
          </s.BubbleReplyText>
        </s.BubbleReplyContainer>
      ))}
    </s.Wrapper>
  );
}
export default ReplyScreen;
