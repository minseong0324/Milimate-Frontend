import axios from "axios";
import React, {useEffect, useState} from "react";
import {s} from "./style";
import {useNavigate, useParams} from "react-router-dom";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";
import {BiChevronLeft} from "react-icons/bi";

interface Question {
    day: string;
    todayQuestion: string;
    isRead: string;
}

interface Date {
    nowDate: number
}

function QuestionListScreen({nowDate}: Date) {
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    const {accessToken, refreshToken} = useToken();
    const [questions, setQuestions] = useState<Question[]>([]); // 상태 변수와 상태 설정 함수 생성
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
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
                setIsLoading(false);
                alert(response.data);
            } catch (error) {
                //console.error("Error fetching questions:", error);
                alert(error);
            }
        };
        fetchData();
    }, []);
    const questionClick = (day: string) => {
        console.log("이벤트");
        navigate("/replyscreen", {state: {day}});
    };

    const handleNavigate = () => {
        navigate(-1);
      }
    return (
        <>
        <s.BackButton onClick = {handleNavigate}/>

        <s.BackgroundContainer>
          <s.Container>
            <s.Text>
              질문 리스트
            </s.Text>
          </s.Container>
            <s.MainWrapper>


                {/*{nowDate > 1 ? (*/}
                {/*    <s.CustomUl>*/}
                {/*        {isLoading ? (<div>Loading...</div>) : (*/}
                {/*            questions.map((question, index) => (*/}
                {/*                <li key={index}>*/}
                {/*                    <s.LiLayout>*/}
                {/*                        <s.BootImg></s.BootImg>*/}
                {/*                        <s.CustomLi onClick={() => questionClick(question.day, question.todayQuestion)}>*/}
                {/*                            {question.todayQuestion}*/}
                {/*                        </s.CustomLi>*/}
                {/*                        <s.CommaText>"</s.CommaText>*/}
                {/*                    </s.LiLayout>*/}
                {/*                </li>*/}
                {/*            ))*/}
                {/*        )}*/}
                {/*    </s.CustomUl>*/}
                {/*) : (<div> 아직은 확인할 수 없습니다. </div>)}*/}

                {questions && nowDate > 1 ? (
                    <s.CustomUl>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            questions.map((question, index) => (
                                <li key={index}>
                                    <s.LiLayout>
                                        {question.isRead == "false" ? <s.DayText>{question.day}</s.DayText> :
                                            <s.GreyDayText>{question.day}</s.GreyDayText>}

                                        <s.CustomLi
                                            onClick={() =>
                                                questionClick(question.day)
                                            }
                                        >
                                            {question.todayQuestion}
                                        </s.CustomLi>
                                    </s.LiLayout>
                                    <s.Splice></s.Splice>
                                </li>
                            ))
                        )}
                    </s.CustomUl>
                ) : (
                    <s.VoidQuestion onClick = {()=>{
                        questionClick("12");
                    }}>아직은 질문이 없습니다.</s.VoidQuestion>
                )}

            </s.MainWrapper>

        </s.BackgroundContainer>
        </>
    );
}

export default QuestionListScreen;
