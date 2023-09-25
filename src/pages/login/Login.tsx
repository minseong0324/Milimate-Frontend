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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }
  return (
    <>
    <s.BackButton onClick = {handleNavigate}/>
    
    <s.BackgroundContainer>
    
      <s.Container>
        <s.Text>
          로그인
        </s.Text>
      </s.Container>
                
      <s.LoginWrapper>

      
        
         
        <s.LogoTitleWrapper>
          <s.MainLogo />
          <s.SubTitle />
        </s.LogoTitleWrapper>
        <s.Character/>
        

        <s.ButtonWrapper>
          <NaverLogin imageUrl={NaverLoginImage} />
          <KakaoLogin imageUrl={KakaoLoginImage} />
          <GoogleLogin buttonImage={GoogleLoginImage} />
        </s.ButtonWrapper>
          
       

        {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
      </s.LoginWrapper>
    </s.BackgroundContainer>
    </>
  );
}

export default Login;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
