// NaverLogin.tsx
import React from "react";
import { s } from "./style";

type GoogleLoginButtonProps = {
  buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
};

// 네이버 로그인 컴포넌트
const GoogleLogin: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {

  // 이미지 클릭 시 네이버 로그인 페이지로 이동
  const handleButtonClick = () => {
    window.location.href = "https://api.mili-mate.com/api/oauth/google";
  };

  return (
    <s.GoogleLoginButton
      buttonImage={buttonImage}
      onClick={handleButtonClick}
    />
  );
};

export default GoogleLogin;
