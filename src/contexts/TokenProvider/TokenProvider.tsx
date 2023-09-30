import React, { useState, useEffect, useContext, ReactNode } from 'react';
import axios, {AxiosError} from 'axios';
import {s} from './style';
import { useNavigate } from 'react-router-dom';
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 1. 토큰 관리를 위한 Context 생성//
type TokenContextType = {
    accessToken: string | null;
    refreshToken: string | null;
};
const TokenContext = React.createContext<TokenContextType>({
    accessToken: null,
    refreshToken: null,
});

interface TokenProviderProps {
    children: ReactNode;
}
function TokenProvider({ children }: TokenProviderProps) {
    const navigate = useNavigate();
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

    useEffect(() => {
        const interval = setInterval(async () => {
            const refreshToken = localStorage.getItem('refreshToken');
            try {
            if (refreshToken) {
                const response = await axios.post(`https://api.mili-mate.com/api/auth/refresh`,{}, {
                    headers: {
                        'reauthorization': `${refreshToken}`
                    }
                });
                if (response.status === 200) {
                    const accessToken = response.headers['authorization'];
                    localStorage.setItem('accessToken', accessToken);

                    const newRefreshToken = response.headers['reauthorization'];
                    localStorage.setItem('refreshToken', newRefreshToken);
                 } 
            }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                  
                  
                    const status = error?.response?.status;
                    alert("세션이 만료되었습니다.")
                    if (status === 404) {
                        // 리소스를 찾을 수 없음
                      } else if (status === 500) {
                          // 서버 내부 오류
                      } else {
                          // 기타 상태 코드 처리
                      }
                    } 
                    localStorage.clear();
                    //navigate('/')
            }
        
        }, 1000 * 60 * 30); // 30분 마다 실행

        return () => clearInterval(interval);
        
  }, []);

  return (
    <TokenContext.Provider value={{ 
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
    }}>
        {children}
        <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
            {modalErrorContent}
        </ErrorModal>
    </TokenContext.Provider>
  );
}

// 다른 컴포넌트에서 쉽게 사용할 수 있는 custom hook
export function useToken() {
  return useContext(TokenContext);
}

export default TokenProvider;