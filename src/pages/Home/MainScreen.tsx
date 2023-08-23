import React from "react";
import { s } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function MainScreen() {
  const navigate = useNavigate();
  const navigateQuestionListScreen = async () => {
    navigate("/QuestionListScreen");
  };

  return (
    <s.WrapperLayout>
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
        <s.CheckReplyBtn>"어제의 답변 확인"</s.CheckReplyBtn>
        <s.TotalQuestionList onClick={navigateQuestionListScreen}>
          "질문 리스트 확인"
        </s.TotalQuestionList>
        <s.ShareQuestion>"공유하기"</s.ShareQuestion>
        <s.MyCompletion>"수료일 D-30"</s.MyCompletion>
        <s.CabinetImg></s.CabinetImg>
      </s.ImageContainer>
    </s.WrapperLayout>
  );
}

export default MainScreen;
