// NaverLogin.tsx
import React, {useEffect, useState} from "react";
import { s } from "./style";

interface NaverProps {
  imageUrl: string;
}

// 네이버 로그인 컴포넌트
const NaverLogin: React.FC<NaverProps> = ({ imageUrl }) => {

  // 이미지 클릭 시 네이버 로그인 페이지로 이동
  const handleButtonClick = () => {
    //window.location.href = "https://api.mili-mate.com/api/oauth/naver";
    alert("네이버 로그인은 10/5 오픈예정입니다. 카카오 로그인을 이용해주세요.")
  };

  return (
    <s.NaverLoginButton
      style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}
      onClick={handleButtonClick}
    />
  );
};

export default NaverLogin;
