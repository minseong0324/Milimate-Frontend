import React, { useState } from "react";
import { s } from "./style";
import axios, {AxiosError} from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal/ErrorModal'
function AddReply() {
  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
  //const [sender, setSender] = useState("");
  //const [reply, setReply] = useState("");
  const [formData, setFormData] = useState({
    sender: "",
    reply: "",
  });
  const navigate = useNavigate();
  const [errorModalContent, setModalErrorContent] =  useState<React.ReactNode>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async () => {
    console.log(formData.sender);
    console.log(formData.reply);

    try {
      const response = await axios.post(
        `https://api.mili-mate.com/api/guest/${userId}/reply`,
        {
          senderName: formData.sender,
          replyContent: formData.reply,
        },
      );
      if (response.status === 200) {
        alert("답변을 다는 것에 성공했어요!");
        navigate(`/guest/${userId}`);
      } 
      console.log(response.data);
    } catch (error: unknown) { 
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        alert("답변 달기 실패");
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>답변을 다는 것에</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>실패했어요.</s.ErrorModalTextsWrapper2>
              <s.ButtonStyle onClick={handleErrorModalClose}>닫기</s.ButtonStyle>
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
      setModalOpen(true);
      
      return null;
    }
  };

  const handleErrorModalClose = () => {
    setModalOpen(false);
    navigate(`/guest/${userId}`);
    }

  return (
    <>
      <s.Wrapper>
        <s.BubbleContainer>
          <s.BubbleText
            name="sender"
            value={formData.sender}
            onChange={handleInputChange}
            placeholder="작성자 : "
          ></s.BubbleText>
          <s.BubbleImage />
        </s.BubbleContainer>
        <s.BubbleReplyContainer>
          <s.BubbleReplyImage />
          <s.BubbleReplyText
            name="reply"
            value={formData.reply}
            onChange={handleInputChange}
            placeholder="질문에 대한 답을 적어주세요!!"
          ></s.BubbleReplyText>
        </s.BubbleReplyContainer>
        <s.ButtonStyle onClick={onSubmit}>등록</s.ButtonStyle>
      </s.Wrapper>

      <ErrorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} >
          {errorModalContent}
      </ErrorModal>
    </>
  );
}

export default AddReply;
