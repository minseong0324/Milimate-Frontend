import axios from "axios";
import React, { useEffect, useState } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
function QuestionListScreen() {
  interface Question {
    day: string;
    todayQuestion: string;
  }
  const { accessToken, refreshToken } = useToken();
  const [questions, setQuestions] = useState<Question[]>([]); // 상태 변수와 상태 설정 함수 생성
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      try {
        const response = await axios.get<Question[]>(
          `https://api.mili-mate.com/api/user/${userId}/questionList`,
          {
            headers: {
              authorization: `${accessToken}`,
            },
          }
        );
        setQuestions(response.data); // 데이터를 가져온 후 상태 업데이트
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    //fetchData();
  }, []);
  //   const questionClick = (question: Question) => {
  //     console.log("이벤트");
  //   };
  const questionClick = (day: string, question: string) => {
    console.log("이벤트");
    navigate("/replyscreen", { state: { day, question } });
  };
  return (
    <>
      <s.MainWrapper>
        <h1>질문 리스트</h1>
        <s.CustomUl>
           {questions.map((question, index) => (
          <li key={index}>
            <s.LiLayout>
            <s.BootImg></s.BootImg>
            <s.CustomLi onClick={() => questionClick("asdf", "asdf")}>
              질문 질문 질문asdfasdfasdf
            </s.CustomLi>
            <s.CommaText>"</s.CommaText>
          </s.LiLayout>
          <s.LiLayout>
            <s.BootImg></s.BootImg>
            <s.CustomLi>질문 질문 질문</s.CustomLi>
            <s.CommaText>"</s.CommaText>
          </s.LiLayout>
          </li>
        ))} 
          
        </s.CustomUl>
      </s.MainWrapper>
    </>
  );
}

export default QuestionListScreen;
