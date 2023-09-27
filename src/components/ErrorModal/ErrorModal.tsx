import React, { useRef } from 'react';
import {s} from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);  // 여기에 타입을 지정해주었습니다.

  const handleWrapperClick = (e: React.MouseEvent) => {  // SyntheticEvent 대신 MouseEvent 사용
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {  // e.target을 Node로 타입 단언
      onClose();
    }
  };

  return (
    <s.ModalWrapper show={isOpen} onClick={handleWrapperClick}>
      <s.ModalContent ref={contentRef}>
        <s.ModalInnerContent>
          {children}
        </s.ModalInnerContent>
      </s.ModalContent>
    </s.ModalWrapper>
  );
};

export default ErrorModal;
