import { useEffect, useRef } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "src/contexts/TokenProvider/TokenProvider";

interface PropsType {
  setModalOpen: (open: boolean) => void;
  contentText: string;
}

function LogoutModalBasic({ setModalOpen, contentText }: PropsType) {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 내부 클릭 시 이벤트 버블링 중지
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const accessToken = useToken();
  const logoutAccount = async () => {
    const userId = await localStorage.getItem("userId");

    try {
      const response = await axios.put(
        `http://localhost:8080/api/myPage/${userId}/logout`,
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );
      if (response.status == 200) {
        localStorage.clear();
        navigate("/", { replace: true });
        alert("로그아웃 되었습니다.");
      }
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error("Failed to fetch user info:", error);

        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
          // 서버 내부 오류
        } else {
          // 기타 상태 코드 처리
        }
      }

      return null;
    }
  };
  return (
    <s.Wrapper onClick={closeModal}>
      <s.ModalBox ref={modalRef} onClick={stopPropagation}>
        <s.TitleText>알림</s.TitleText>
        <s.ContentText>{contentText}</s.ContentText>
        <s.BtnDiv>
          <s.OkBtnStyle onClick={logoutAccount}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.ModalBox>
    </s.Wrapper>
  );
}

export default LogoutModalBasic;