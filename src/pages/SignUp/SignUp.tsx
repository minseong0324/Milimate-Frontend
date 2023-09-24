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
  const [logoAndSubtitleSize, setLogoAndSubtitleSize] = useState(s.calculateButtonSize());
  const [charSize, setCharSize] = useState(s.calculateButtonSize());

  useEffect(() => {
    const handleResize = () => {
      const sizes = s.calculateButtonSize();
      setLogoAndSubtitleSize(sizes);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <s.BackgroundContainer>
      <s.Container>
        <s.Text>
          회원가입
        </s.Text>
      </s.Container>
                
      <s.SignUpWrapper>

      
        
         
        <s.LogoTitleWrapper logoTitleTopMargin={logoAndSubtitleSize.logoTitleTopMargin}>
          <s.MainLogo width={logoAndSubtitleSize.mainLogoWidth} />
          <s.SubTitle width={logoAndSubtitleSize.subtitleWidth} />
        </s.LogoTitleWrapper>
        <s.Character width={logoAndSubtitleSize.charWidth}/>
        

        <s.ButtonWrapper>
          <NaverLogin imageUrl={NaverSignUpImage} />
          <KakaoLogin imageUrl={KakaoSignUpImage} />
          <GoogleLogin buttonImage={GoogleSignUpImage} />
        </s.ButtonWrapper>
          
       

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
