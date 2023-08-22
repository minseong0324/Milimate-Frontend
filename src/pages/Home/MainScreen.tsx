import React from "react";
import { s } from "./styled";
function MainScreen() {
  return (
    <s.ProfileWrapper>
      <s.WrapperLayout>
        <s.CenteredDiv>이미지</s.CenteredDiv>
        <s.MainTextWrapper>
          <s.MainNameText>훈련병 김건휘</s.MainNameText>
          <s.MainNameText>입대일 : 2020. 05. 18</s.MainNameText>
        </s.MainTextWrapper>
      </s.WrapperLayout>
      <button>버튼</button>
    </s.ProfileWrapper>
  );
}
export default MainScreen;
