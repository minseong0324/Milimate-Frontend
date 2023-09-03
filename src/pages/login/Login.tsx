import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./kakaoLogin/KakaoLogin";
import NaverLogin from "./naverLogin/NaverLogin";
import GoogleLogin from "./googleLogin/GoogleLogin";
import axios, { AxiosError } from "axios";
import { QueryClientProvider, useMutation, useQueryClient } from "react-query";
import NaverLoginImage from "../../assets/socialLoginButton/NaverLogin.svg";
import KakaoLoginImage from "../../assets/socialLoginButton/KakaoLogin.svg";
import GoogleLoginImage from "../../assets/socialLoginButton/GoogleLogin.svg";
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 로그인에 필요한 사용자의 정보를 나타내는 타입을 정의합니다.
type LoginCredentials = {
  email: string;
  password: string;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  return (
    <s.BackgroundContainer>
      <s.LoginWrapper>
        <s.TextsStyle>
          <s.Title>로그인</s.Title>
        </s.TextsStyle>

        <s.LoginForm>
          <KakaoLogin imageUrl={KakaoLoginImage} />
          <NaverLogin imageUrl={NaverLoginImage} />
          <GoogleLogin buttonImage={GoogleLoginImage} />
        </s.LoginForm>

        {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
      </s.LoginWrapper>
    </s.BackgroundContainer>
  );
}

export default Login;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
