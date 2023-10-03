import React, {useEffect, useState} from "react";
import { s } from "./style";

type GoogleLoginButtonProps = {
  buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
};

// 네이버 로그인 컴포넌트
const GoogleLogin: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {

  // 이미지 클릭 시 네이버 로그인 페이지로 이동
  const handleButtonClick = () => {
    //window.location.href = "https://api.mili-mate.com/api/oauth/google";
    alert("구글 로그인은 10/9 오픈예정입니다. 카카오 로그인을 이용해주세요.")
  };

  return (
    <s.GoogleLoginButton
      onClick={handleButtonClick}
      style={{
          backgroundImage: `url(${buttonImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}
    />
  );
};

export default GoogleLogin;
