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
                <s.BackButton/>
                
      <s.LoginWrapper>

      <s.Text>
            로그인
          </s.Text>
        
         
        <s.LogoTitleWrapper logoTitleTopMargin={logoAndSubtitleSize.logoTitleTopMargin}>
          <s.MainLogo width={logoAndSubtitleSize.mainLogoWidth} />
          <s.SubTitle width={logoAndSubtitleSize.subtitleWidth} />
        </s.LogoTitleWrapper>
        <s.Character width={logoAndSubtitleSize.charWidth}/>
        

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
  );
}

export default Login;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
