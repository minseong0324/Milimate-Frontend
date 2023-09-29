import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "../login/kakaoLogin/KakaoLogin";
import NaverLogin from "../login/naverLogin/NaverLogin";
import GoogleLogin from "../login/googleLogin/GoogleLogin";
import axios, { AxiosError } from "axios";
import { QueryClientProvider, useMutation, useQueryClient } from "react-query";
import NaverSignUpImage from "../../assets/socialLoginButton/NaverSignUp.svg";
import KakaoSignUpImage from "../../assets/socialLoginButton/KakaoSignUp.svg";
import GoogleSignUpImage from "../../assets/socialLoginButton/GoogleSignUp.svg";
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 로그인에 필요한 사용자의 정보를 나타내는 타입을 정의합니다.
type SignUpCredentials = {
  email: string;
  password: string;
};

function SignUp() {
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
          회원가입
        </s.Text>
      </s.Container>
                
      <s.SignUpWrapper>

      
        
         
        <s.LogoTitleWrapper>
          <s.MainLogo />
          <s.SubTitle />
        </s.LogoTitleWrapper>
        <s.Character/>
        

        <s.ButtonWrapper>
          <NaverLogin imageUrl={NaverSignUpImage} />
          <KakaoLogin imageUrl={KakaoSignUpImage} />
          <GoogleLogin buttonImage={GoogleSignUpImage} />
        </s.ButtonWrapper>
          
        <s.PolicyTextsWrapper>
            <s.PolicyTextsStyle>
              계속 진행하면 <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/006776f45848445583fb3270b03364da?pvs=4">서비스 이용약관</s.PolicyStyledLink>에 동의하고
            </s.PolicyTextsStyle>
            <s.PolicyTextsStyle>
              <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/1f195e6045b049aebf4ade0058718d92?pvs=4">개인정보 처리방침</s.PolicyStyledLink>을 읽었음을 인정하는 것으로 간주됩니다.
            </s.PolicyTextsStyle>
          </s.PolicyTextsWrapper>
          
      </s.SignUpWrapper>
    </s.BackgroundContainer>
    </>
  );
}

export default SignUp;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
