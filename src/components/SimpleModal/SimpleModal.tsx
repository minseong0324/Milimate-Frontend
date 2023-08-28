import { useEffect, useRef } from "react";
import { s } from "./style";

interface PropsType {
  setModalOpen: (open: boolean) => void;
  contentText: string;
  modalType: number;
}

function ModalBasic({ setModalOpen, contentText, modalType }: PropsType) {
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

  return (
    <s.Wrapper onClick={closeModal}>
      <s.ModalBox ref={modalRef} onClick={stopPropagation}>
        <s.TitleText>알림</s.TitleText>
        {modalType == 0 ? (
          <s.ContentText>{contentText}</s.ContentText>
        ) : (
          <s.ContentText>
            입대일과 수료일은 숫자로
            <br />
            입력해주세요!
          </s.ContentText>
        )}

        <s.BtnStyle onClick={closeModal}>확인</s.BtnStyle>
      </s.ModalBox>
    </s.Wrapper>
  );
}

export default ModalBasic;
