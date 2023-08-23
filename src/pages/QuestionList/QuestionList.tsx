import axios from "axios";
import React, { useEffect, useState } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
function QuestionListScreen() {
  interface Question {
    day: string;
    todayQuestion: string;
  }

  const [questions, setQuestions] = useState<Question[]>([]); // 상태 변수와 상태 설정 함수 생성
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      try {
        const response = await axios.get<Question[]>(
          `http://localhost:8080/user/${userId}/questionList`
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
    navigate("/replyscreen");
  };
  return (
    <>
      <s.MainWrapper>
        <h1>질문 리스트</h1>
        <s.CustomUl>
          {/* {questions.map((question, index) => (
          <li key={index}>
            Day: {question.day}, Question: {question.todayQuestion}
          </li>
        ))} */}
          <s.LiLayout>
            <s.BootImg></s.BootImg>
            <s.CustomLi onClick={() => questionClick("asdf", "asdf")}>
              질문 질문 질문
            </s.CustomLi>
            <h1>"</h1>
          </s.LiLayout>
          <s.LiLayout>
            <s.BootImg></s.BootImg>
            <s.CustomLi>질문 질문 질문</s.CustomLi>
            <h1>"</h1>
          </s.LiLayout>
        </s.CustomUl>
      </s.MainWrapper>
    </>
  );
}

export default QuestionListScreen;
