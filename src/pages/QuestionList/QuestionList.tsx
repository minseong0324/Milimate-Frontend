import axios from "axios";
import React, {useEffect, useState} from "react";
import {s} from "./style";
import {useNavigate} from "react-router-dom";
import {useToken} from "../../contexts/TokenProvider/TokenProvider";
import {BiChevronLeft} from "react-icons/bi";

interface Question {
    day: string;
    todayQuestion: string;
}

interface Date {
    nowDate: number
}

function QuestionListScreen({nowDate}: Date) {
    const userId = localStorage.getItem("userId");
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
        //fetchData();
    }, []);
    const questionClick = (day: string, question: string) => {
        console.log("이벤트");
        navigate("/replyscreen", {state: {day, question}});
    };

    const goBackBtn = () => {
        navigate(-1);
    };
    return (
        <>
            <s.MainWrapper>
                <s.IconLayout>
                    <s.ButtonDesign onClick={goBackBtn}>
                        <BiChevronLeft size={36} color="black"/>

                    </s.ButtonDesign>
                    <s.TitleText>질문 리스트</s.TitleText>
                    <s.ButtonDesign onClick={()=>{}}>
                    <BiChevronLeft size={36} color="#f2f1ee"/>
                    </s.ButtonDesign>
                </s.IconLayout>

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
                <s.CustomUl>
                    <li>
                        <s.LiLayout>
                            <s.DayText>09/25</s.DayText>
                            <s.CustomLi onClick={() => {
                                questionClick( "09/10", "전역하고 저와 하고 싶은 것들은 무엇인가요")
                            }}>
                                {/*//               {() => questionClick(question.day, question.todayQuestion)}>*/}
                                전역하고 저와 하고 싶은 것들은 무엇인가요?
                            </s.CustomLi>
                        </s.LiLayout>
                        <s.Splice></s.Splice>
                    </li>
                    <li>
                        <s.LiLayout>
                            <s.DayText>09/25</s.DayText>
                            <s.CustomLi onClick={() => {}}>
                                {/*//               {() => questionClick(question.day, question.todayQuestion)}>*/}
                                전역하고 저와 하고 싶은 것들은 무엇인가요?
                            </s.CustomLi>
                        </s.LiLayout>
                        <s.Splice></s.Splice>
                    </li>
                    <li>
                        <s.LiLayout>
                            <s.DayText>09/25</s.DayText>
                            <s.CustomLi onClick={() => {}}>
                                {/*//               {() => questionClick(question.day, question.todayQuestion)}>*/}
                                전역하고 저와 하고 싶은 것들은 무엇인가요?
                            </s.CustomLi>
                        </s.LiLayout>
                        <s.Splice></s.Splice>
                    </li>
                </s.CustomUl>

            </s.MainWrapper>
        </>
    );
}

export default QuestionListScreen;
