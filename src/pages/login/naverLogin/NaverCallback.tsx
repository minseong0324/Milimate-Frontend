import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { s } from "./style";
//import ErrorModal from "src/components/ErrorModal/ErrorModal";
import { useDispatch } from "react-redux";
import { setUserInfo } from "src/components/Redux/Slices/userInfoSlice";
function NaverCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const dispatch = useDispatch();
  const handleOAuthNaver = async (code: string) => {
    try {
      // 네이버로부터 받아온 code를 서버에 전달하여 네이버로 회원가입 & 로그인한다
      const response = await axios.get(
        `https://api.mili-mate.com/api/oauth/login/naver?code=${code}`
      );
      if (response.status === 200) {
        const accessToken = response.headers["authorization"];
        const refreshToken = response.headers["reauthorization"];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        // console.log("refreshToken");
        // //console.log(response.headers.refreshToken);
        // console.log("refreshToken----");
        // console.log("accessToken");
        // //console.log(response.headers.accessToken);
        // console.log("accessToken----");
        console.log("access : ", accessToken);
        console.log("refresh : ", refreshToken);
        console.log("모든 토큰 : ", response.headers);
        console.log("데이터 : ", response.data);
        if (response.data.requireInfo == false) {
          dispatch(
            setUserInfo({
              userName: response.data.userName,
              enlistmentYear: response.data.enlistmentYear,
              enlistmentMonth: response.data.enlistmentMonth,
              enlistmentday: response.data.enlistmentDay,
              completionYear: response.data.enlistmentYear,
              completionMonth: response.data.completionMonth,
              completionday: response.data.completionDay,
            })
          );
          localStorage.setItem("userId", response.data.userId);
          navigate(`/home/${response.data.userId}`, { replace: true });
        } else if (response.data.requireInfo == true) {
          localStorage.setItem("userId", response.data.userId);
          navigate("/moreinfo"); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
        }
      }
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error("Failed to fetch user info:", error);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
            <s.ErrorModalTextsWrapper2>
              네이버에서 정보를
            </s.ErrorModalTextsWrapper2>
            <s.ErrorModalTextsWrapper2>
              불러오지 못했어요.
            </s.ErrorModalTextsWrapper2>
            <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
          </s.ErrorCenterModalWrapper>
        );
        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
          // 서버 내부 오류
        } else {
          // 기타 상태 코드 처리
        }
      }
      setErrorModalOpen(true);
      navigate("/login");
      return null;
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // 네이버는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
    if (code) {
      alert("CODE = " + code);
      handleOAuthNaver(code);
    }

    if (!code) {
      alert("인증 코드 또는 상태 값이 없습니다.");
      navigate("/login");
      return;
    }
  }, [location]);

  const handleErrorModalClose = () => {
    navigate("/login");
  };

  return (
    <s.NaverWrapper>
      로그인 중...
      {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
    </s.NaverWrapper>
  );
}

export default NaverCallback;
