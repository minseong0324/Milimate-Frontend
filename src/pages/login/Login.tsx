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
        
        <s.PolicyTextsWrapper>
            <s.PolicyTextsStyle>
              계속 진행하면 <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/006776f45848445583fb3270b03364da?pvs=4">서비스 이용약관</s.PolicyStyledLink>에 동의하고
            </s.PolicyTextsStyle>
            <s.PolicyTextsStyle>
              <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/1f195e6045b049aebf4ade0058718d92?pvs=4">개인정보 처리방침</s.PolicyStyledLink>을 읽었음을 인정하는 것으로 간주됩니다.
            </s.PolicyTextsStyle>
          </s.PolicyTextsWrapper>
          
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
