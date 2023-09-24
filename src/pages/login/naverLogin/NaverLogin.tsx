// NaverLogin.tsx
import React, {useEffect, useState} from "react";
import { s } from "./style";

interface NaverProps {
  imageUrl: string;
}

// 네이버 로그인 컴포넌트
const NaverLogin: React.FC<NaverProps> = ({ imageUrl }) => {
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
    window.location.href = "https://api.mili-mate.com/api/oauth/naver";
  };

  return (
    <s.NaverLoginButton
      width={buttonSize.width} 
      height={buttonSize.height}
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
