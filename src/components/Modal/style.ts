import styled, { keyframes } from 'styled-components';
import modalBackground from '../../assets/modal/Modal.svg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의했습니다.
interface ModalWrapperProps {
    show: boolean;
  }
// ModalWrapper 컴포넌트에 ModalWrapperProps 타입을 적용하여 show 프로퍼티를 사용할 수 있도록 했습니다.
const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 0.5는 투명도를 나타냅니다.
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${modalBackground}); // 여기에서 이미지 변수를 사용합니다
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box; // 이 부분을 추가
  padding-top: 50px;
  padding-bottom: 50px;
  width: 300px;
  height: 519.642857px;
  color: #4a534a; 
  font-size: 16px;
  overflow: auto; 
`;

const ModalInnerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;  // 스크롤 기능은 여기에 추가합니다.
`;

const ErrorCenterModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 65px;
`;

const ErrorModalTextsWrapper = styled.div`
position: relative;
display: flex;
font-size: 16px;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

export const s = {
    fadeIn,
    fadeOut,
    ModalWrapper,
    ModalContent,
    ModalInnerContent,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper
}