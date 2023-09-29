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


        <s.PolicyTextsWrapper>
            <s.PolicyTextsStyle>
              계속 진행하면 <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/006776f45848445583fb3270b03364da?pvs=4">서비스 이용약관</s.PolicyStyledLink>에 동의하고
            </s.PolicyTextsStyle>
            <s.PolicyTextsStyle>
              <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/1f195e6045b049aebf4ade0058718d92?pvs=4">개인정보 처리방침</s.PolicyStyledLink>을 읽었음을 인정하는 것으로 간주됩니다.
            </s.PolicyTextsStyle>
          </s.PolicyTextsWrapper>
        
      </s.CenteredWrapper>
    </s.BackgroundContainer>
  );
}

export default HomeBeforeLogin;
