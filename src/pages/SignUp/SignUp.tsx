import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "../login/kakaoLogin/KakaoLogin";
import NaverLogin from "../login/naverLogin/NaverLogin";
import GoogleLogin from "../login/googleLogin/GoogleLogin";
import GoogleLoginButton from "../login/googleLogin/GoogleLoginButton";
import axios, { AxiosError } from "axios";
import { QueryClientProvider, useMutation, useQueryClient } from "react-query";
import NaverSignUpImage from "../../assets/socialLoginButton/NaverSignUp.svg";
import KakaoSignUpImage from "../../assets/socialLoginButton/KakaoSignUp.svg";
import GoogleSignUpImage from '../../assets/socialLoginButton/GoogleSignUp.svg'
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 로그인에 필요한 사용자의 정보를 나타내는 타입을 정의합니다.
type SignUpCredentials = {
  email: string;
  password: string;
};

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 서비스 설명 함수
  const handleServiceDescription = () => {
    setErrorModalOpen(true);
  };
  
  return (
    <s.BackgroundContainer>
      <s.SignUpWrapper>
        <s.TextsStyle>
          <s.Title>회원가입</s.Title>
        </s.TextsStyle>


        <s.SignUpForm>
          <KakaoLogin imageUrl={KakaoSignUpImage}/>
          <NaverLogin imageUrl={NaverSignUpImage}/>
          <GoogleLogin buttonImage={GoogleSignUpImage}/>
        </s.SignUpForm>
          
      {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
      </s.SignUpWrapper>
    </s.BackgroundContainer>
  );
}

export default SignUp;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
