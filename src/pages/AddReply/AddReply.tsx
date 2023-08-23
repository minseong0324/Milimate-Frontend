import React from "react";
import { s } from "./styled";
function AddReply() {
  const onSubmit = () => {
    console.log("asdfasdfasdfasdf");
  };
  return (
    <>
      <s.Wrapper>
        <s.BubbleContainer>
          <s.BubbleText placeholder="작성자 : "></s.BubbleText>
          <s.BubbleImage />
        </s.BubbleContainer>
        <s.BubbleReplyContainer>
          <s.BubbleReplyImage />
          <s.BubbleReplyText placeholder="질문에 대한 답을 적어주세요!!"></s.BubbleReplyText>
        </s.BubbleReplyContainer>
        <s.ButtonStyle onClick={onSubmit}>등록</s.ButtonStyle>
      </s.Wrapper>
    </>
  );
}

export default AddReply;
