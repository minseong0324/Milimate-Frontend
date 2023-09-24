import { s } from "./style";
import { useNavigate } from "react-router-dom"; // useNavigate import
import React, { useState, useEffect } from 'react';

function HomeBeforeLogin() {
    const [buttonSize, setButtonSize] = useState(s.calculateButtonSize());
    const [logoAndSubtitleSize, setLogoAndSubtitleSize] = useState(s.calculateButtonSize());

    useEffect(() => {
      const handleResize = () => {
        const sizes = s.calculateButtonSize();
        setButtonSize(sizes);
        setLogoAndSubtitleSize(sizes);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const navigate = useNavigate(); // useNavigate hook 사용

  return (
    <s.BackgroundContainer>
      <s.CenteredWrapper>
        {/*<s.Title>My</s.Title>
        <s.Title>Cabinet</s.Title>*/}
        <s.LogoTitleWrapper logoTitleTopMargin={logoAndSubtitleSize.logoTitleTopMargin}>
          <s.MainLogo width={logoAndSubtitleSize.mainLogoWidth} />
          <s.SubTitle width={logoAndSubtitleSize.subtitleWidth} />
        </s.LogoTitleWrapper>
        

        <s.ButtonWrapper>
          <s.Button width={buttonSize.width} height={buttonSize.height} onClick={() => navigate("/login")}>
            로그인
          </s.Button>
          <s.Button width={buttonSize.width} height={buttonSize.height} onClick={() => navigate("/signup")}>
            회원가입
          </s.Button>
        </s.ButtonWrapper>

        
      </s.CenteredWrapper>
    </s.BackgroundContainer>
  );
}

export default HomeBeforeLogin;
