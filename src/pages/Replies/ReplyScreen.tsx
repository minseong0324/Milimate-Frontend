import React, { useEffect, useState } from "react";
import { s } from "./style";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
  console.log(state.day, state.question);
  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8080/user/${userId}/questionList/${day}`
      );
      setQuestionData(response.data);
      //fetchData();
    };
  }, [day]);
  const text =
    "여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요 " +
    " 텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    " 텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요." +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요." +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.";

  return (
    // <s.Wrapper>
    //     <s.IconLayout>
    //       <FaRegArrowAltCircleLeft size={36} color="white" />
    //     </s.IconLayout>
    //     <h1>{questionData?.todayQuestion}</h1>
    //     <s.BubbleContainer>
    //       {questionData?.replies.map((reply, index) => (
    //         <div key={index}>
    //           <h2>{reply.senderName}</h2>
    //           <p>{reply.replyContent}</p>
    //         </div>
    //       ))}
    //     </s.BubbleContainer>
    //   </s.Wrapper>
    <s.Wrapper>
      <s.IconLayout>
        <FaRegArrowAltCircleLeft size={36} color="white" />
      </s.IconLayout>
      <s.BubbleContainer>
        <s.BubbleImage />
        <s.BubbleText>{text}</s.BubbleText>
      </s.BubbleContainer>
      <s.BubbleReplyContainer>
        <s.BubbleReplyImage />
        <s.BubbleReplyText>{text}</s.BubbleReplyText>
      </s.BubbleReplyContainer>
    </s.Wrapper>
  );
}
export default ReplyScreen;
