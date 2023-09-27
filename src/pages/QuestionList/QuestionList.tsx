import axios from "axios";
import React, {useEffect, useState} from "react";
import {s} from "./style";
import {useNavigate, useLocation, useParams} from "react-router-dom";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";
import dayjs from "dayjs";

interface Question {
    day: string;
    todayQuestion: string;
    isRead: string;
}

interface Date {
    nowDate: number;
}

function QuestionListScreen({nowDate}: Date) {
    const {state} = useLocation();
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
    const {accessToken, refreshToken} = useToken();
    const [questions, setQuestions] = useState<Question[]>([]); 
    
    // 상태 변수와 상태 설정 함수 생성
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
                const sortedQuestions = [...response.data].sort((a, b) => {
                    // day 값이 "MM/DD" 형식이므로 이를 "YYYY/MM/DD" 형식으로 변경하여 정렬
                    const dateA = dayjs(`2023/${a.day}`);
                    const dateB = dayjs(`2023/${b.day}`);
                    return dateB.isBefore(dateA) ? -1 : dateA.isBefore(dateB) ? 1 : 0;  // 내림차순 정렬
                });
                setQuestions(sortedQuestions);  // 정렬된 데이터로 상태 업데이트
            } catch (error) {
                alert("정보를 불러오지 못했습니다.");
            }
        };
        fetchData();
    },[]);

    const questionClick = (day: string) => {
        console.log("이벤트");
        navigate(`/replyscreen/${userId}`, {state: {day}});
    };

    const handleNavigate = () => {
        navigate(`/home/${userId}`);
    }

    return (
        <>
            <s.BackButton onClick={handleNavigate}/>

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

                    {questions && state?.nowDate >= 1 ? (

                        <s.CustomUl>
                            {
                                questions.map((question, index) => (
                                    <li key={index}>
                                        <s.LiLayout>
                                            {question.isRead == "false" ? <s.DayText>{question.day}</s.DayText> :
                                                <s.GreyDayText>{question.day}</s.GreyDayText>}

                                            {question.isRead == "false" ? 
                                            <s.CustomLi
                                                onClick={() =>
                                                    questionClick(question.day)
                                                }
                                            >
                                                {question.todayQuestion}
                                            </s.CustomLi> :
                                            <s.GreyCustomLi
                                                onClick={() =>
                                                    questionClick(question.day)
                                                }
                                            >
                                                {question.todayQuestion}
                                            </s.GreyCustomLi>
                                            }
                                        </s.LiLayout>
                                        <s.Splice></s.Splice>
                                    </li>
                                ))
                            }
                        </s.CustomUl>
                    ) : (
                        <s.VoidQuestion onClick={() => {
                            questionClick("12");
                        }}>아직은 질문이 없습니다.</s.VoidQuestion>
                    )}

                </s.MainWrapper>

            </s.BackgroundContainer>
        </>
    );
}

export default QuestionListScreen;
