import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { s } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "src/components/Redux/Slices/userInfoSlice";
import { userInfo } from "os";
//import ErrorModal from "src/components/ErrorModal/ErrorModal";

function KakaoCallback() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  const handleOAuthKakao = async (code: string) => {
    try {
      // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
      const response = await axios.get(
        `https://api.mili-mate.com/api/oauth/login/kakao?code=${code}`
      );
        const accessToken = response.headers["authorization"];
        const refreshToken = response.headers["reauthorization"];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        console.log("access : ", accessToken);
        console.log("refresh : ", refreshToken);
        console.log("모든 토큰 : ", response.headers);
        console.log("데이터 : ", response.data);
        //console.log(response.headers.accessToken);
        console.log(response.data.requireInfo);
        if (response.data.requireInfo == false) {
          dispatch(
            setUserInfo({
              userName: response.data.userName,
              enlistmentYear: response.data.enlistmentYear,
              enlistmentMonth: response.data.enlistmentMonth,
              enlistmentday: response.data.enlistmentDay,
              completionYear: response.data.completionYear,
              completionMonth: response.data.completionMonth,
              completionday: response.data.completionDay,

            })//
          );

          localStorage.setItem("userId", response.data.userId);
          //alert(response.data.userId);
          navigate(`/home/${response.data.userId}`); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
        } else if (response.data.requireInfo == true) {
          localStorage.setItem("userId", response.data.userId);
          navigate("/moreinfo");
        }

    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error("Failed to fetch user info:", error);
        alert("카카오에서 정보를 불러오지 못했어요.")
        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
          // 서버 내부 오류
        } else {
          // 기타 상태 코드 처리
        }
      }
      navigate("/login");
      return null;
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
    if (code) {
      handleOAuthKakao(code);
    }

    if (!code) {
      alert("인증 코드 또는 상태 값이 없습니다.");
      navigate("/login");
      return;
    }
  }, []);

  const handleErrorModalClose = () => {
    navigate("/login");
  };

  return (
    <>
      로그인 중...
      {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
    </>
  );
}

export default KakaoCallback;
