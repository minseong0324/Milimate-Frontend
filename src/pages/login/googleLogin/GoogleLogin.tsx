import React, {useEffect, useState} from "react";
import { s } from "./style";

type GoogleLoginButtonProps = {
  buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
};

// 네이버 로그인 컴포넌트
const GoogleLogin: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {
  const [buttonSize, setButtonSize] = useState(s.calculateButtonSize());

    useEffect(() => {
      const handleResize = () => {
        const sizes = s.calculateButtonSize();
        setButtonSize(sizes);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  // 이미지 클릭 시 네이버 로그인 페이지로 이동
  const handleButtonClick = () => {
    window.location.href = "https://api.mili-mate.com/api/oauth/google";
  };

  return (
    <s.GoogleLoginButton
      onClick={handleButtonClick}
      width={buttonSize.width} 
      height={buttonSize.height}
      style={{
          backgroundImage: `url(${buttonImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}
    />
  );
};

export default GoogleLogin;
