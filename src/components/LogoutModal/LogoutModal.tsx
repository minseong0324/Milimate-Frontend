import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
import SmallModal from "../../components/ErrorModal/ErrorModal"

interface PropsType {
  setModalOpen: (open: boolean) => void;
  contentText: string;
}

function LogoutModalBasic({ setModalOpen, contentText }: PropsType) {
  const userId = localStorage.getItem("userId");
  const { accessToken, refreshToken } = useToken();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isSmallModalOpen, setSmallModalOpen] = useState(false);
  const [modalSmallContent, setModalSmallContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장\

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setSmallModalOpen(true)
    setModalSmallContent(
      <s.SmallCenterModalWrapper>
        <s.SmallModalTextsWrapper1>로그아웃 하시겠습니까?</s.SmallModalTextsWrapper1>
        <s.BtnDiv>
          <s.OkBtnStyle onClick={logoutAccount}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.SmallCenterModalWrapper>
    );

  });

  const logoutAccount = async () => {
    try {
      const response = await axios.put(
        `https://api.mili-mate.com/api/myPage/${userId}/logout`, 
        {},
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
        alert("로그아웃에 실패했습니다.")
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
    <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)} >
      {modalSmallContent}
    </SmallModal>
  );
}

export default LogoutModalBasic;
