import { s } from "./style";
import { useNavigate } from "react-router-dom"; // useNavigate import
import React, { useState, useEffect } from 'react';

function HomeBeforeLogin() {

  const navigate = useNavigate(); // useNavigate hook 사용

  return (
    <s.BackgroundContainer>
      <s.BackgroundWrapper>
        <s.TopBackground />
        <s.BottomBackground />
      </s.BackgroundWrapper>

      <s.CenteredWrapper>
        {/*<s.Title>My</s.Title>
        <s.Title>Cabinet</s.Title>*/}
        <s.LogoTitleWrapper>
          <s.MainLogo />
          <s.SubTitle />
        </s.LogoTitleWrapper>
        

        <s.ButtonWrapper>
          <s.Button onClick={() => navigate("/login")}>
            로그인
          </s.Button>
          <s.Button onClick={() => navigate("/signup")}>
            회원가입
          </s.Button>
        </s.ButtonWrapper>

        
      </s.CenteredWrapper>
    </s.BackgroundContainer>
  );
}

export default HomeBeforeLogin;
