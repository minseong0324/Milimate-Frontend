import { s } from "./style";
import { useNavigate } from "react-router-dom"; // useNavigate import

function HomeBeforeLogin() {
  const navigate = useNavigate(); // useNavigate hook 사용

  return (
    <s.BackgroundContainer>
      <s.CenteredWrapper>
        {/*<s.Title>My</s.Title>
        <s.Title>Cabinet</s.Title>*/}
        <s.Title>고무링</s.Title>
        <s.Title> </s.Title>
        <s.P>5주간 힘든 훈련병을 위해 대답해주세요!</s.P>

        <s.ButtonWrapper>
          <s.Break />
          <s.Button onClick={() => navigate("/login")}>로그인</s.Button>
          <s.Break />
          <s.Button onClick={() => navigate("/signup")}>회원가입</s.Button>
        </s.ButtonWrapper>
      </s.CenteredWrapper>
    </s.BackgroundContainer>
  );
}

export default HomeBeforeLogin;
