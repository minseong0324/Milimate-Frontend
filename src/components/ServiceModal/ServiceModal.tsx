import React from 'react';
import { s } from './style';
import Modal from '../Modal/Modal'


interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleNavigateInstagram = () => {
    window.location.href = 'https://instagram.com/maplemailbox_official?igshid=NGVhN2U2NjQ0Yg==';
}



const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
  

            <s.ModalTextsWrapper>

                   
                    <s.TitleWrapper>
                        <s.Title/>
                    </s.TitleWrapper>
                   

                <s.HorizontalContainer2>
                    
                    <s.SubSubTitle>🪖 밀리메이트 이용방법</s.SubSubTitle>
                </s.HorizontalContainer2>
                <s.HorizontalContainer3>
                    
                    <s.Text>1. 링크를 공유합니다.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                   
                    <s.Text>2. 주변인에게 질문에 대한 답변을 받을 수 있습니다.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.Text>3. 우측 상단 2번째 버튼은 마이페이지, 3번째는 지금까지 받은 질문리스트를 확인할 수 있는 버튼입니다.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.Text>4. 현재 이 페이지에 있는 질문은 오늘의 질문이고, 하단 슬라이드의 답변은 어제의 질문에 대한 답변입니다.
                    </s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.Text>5. 가입 이후 수료일을 꼭 입력해주셔야 합니다!
                    </s.Text>
                </s.HorizontalContainer3>
                
                    <s.HorizontalContainer2>
                        <s.SubSubTitle>🪖 밀리메이트</s.SubSubTitle>
                        <s.InstagramButton onClick={handleNavigateInstagram}/>
                    </s.HorizontalContainer2>
                    <s.HorizontalContainer3>
                        <s.Text>밀리메이트는 동국대 학생 3명, 디자이너 2명이 만든 훈련병을 위한 질답 교환 서비스입니다.</s.Text>
                    </s.HorizontalContainer3>
                    <s.HorizontalContainer3>
                        <s.Text>밀리메이트는 수익을 창출하지 않는 비영리 서비스입니다.</s.Text>
                    </s.HorizontalContainer3>
                    <s.HorizontalContainer3>
                        <s.Text>문의사항 및 이벤트 확인은 인스타그램 공식 계정을 통해 확인해주세요!</s.Text>
                    </s.HorizontalContainer3>
                    
                
                
            </s.ModalTextsWrapper>
            

    </Modal>
  );
}

export default ServiceModal;
