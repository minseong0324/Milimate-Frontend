import React, { useEffect, useState } from "react";
import { s } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function MainScreen() {
  interface ResponseData {
    userName: string;
    year: number;
    month: number;
    day: number;
    nowData: number;
    endDate: number;
    todayQuestion: string;
    isInsertedEndDate: boolean;
  }
  const navigate = useNavigate();
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(text.toString());
      alert(text.toString());
    } catch (err) {
      console.log(err);
    }
  };
  const navigateQuestionListScreen = async () => {
    navigate("/QuestionListScreen");
  };
  const navigationAddCompletion = async () => {
    //navigate();
  };
  const [lastCompletionDate, setLastCompletionDate] = useState("0");
  const [data, setData] = useState<ResponseData | null>(null);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${userId}/home`
        );
        const responseData: ResponseData = {
          ...response.data,
          year: Number(response.data.year),
          month: Number(response.data.month),
          day: Number(response.data.day),
          nowDate: Number(response.data.nowDate),
          endDate: Number(response.data.endDate),
        };
        setData(responseData); // 형변환된 응답 데이터를 상태에 할당
      } catch (e) {
        console.log(e);
      }
    };
    //fetchData();
  }, []);
  const [tmpBool, setTempBool] = useState(false);
  const [tmpReply, setTmpReply] = useState(1);
  return (
    <>
      <s.WrapperLayout>
        <s.test>
          <s.ProfileWrapper>
            <s.tmpCharImg></s.tmpCharImg>
            <s.MainTextWrapper>
              <s.MainNameText>훈련병 김건휘</s.MainNameText>
              <s.MainEnlistmentText>입대일 : 2020. 05. 18</s.MainEnlistmentText>
            </s.MainTextWrapper>
          </s.ProfileWrapper>

          <s.ImageContainer>
            <s.TodayQuestionBtn>
              "입대전 저는 어떤 사람이었나요?"
            </s.TodayQuestionBtn>

            {tmpReply > 1 ? (
              <s.CheckReplyBtn>"어제의 답변 확인"</s.CheckReplyBtn>
            ) : (
              <s.NoneReplText>아직은 답변이 없습니다.</s.NoneReplText>
            )}

            <s.TotalQuestionList onClick={navigateQuestionListScreen}>
              "질문 리스트 확인"
            </s.TotalQuestionList>
            <s.ShareQuestion
              onClick={() =>
                handleCopyClipBoard(`http://localhost:3000${location.pathname}`)
              }
            >
              "공유하기"
            </s.ShareQuestion>
            {tmpBool == true ? (
              <s.MyCompletion>"수료일 D-30"</s.MyCompletion>
            ) : (
              <s.NeedAddCompletion onClick={navigationAddCompletion}>
                "수료일을 입력해주세요"
              </s.NeedAddCompletion>
            )}
            <s.CabinetImg></s.CabinetImg>
          </s.ImageContainer>
        </s.test>
      </s.WrapperLayout>
    </>
  );
}

export default MainScreen;
