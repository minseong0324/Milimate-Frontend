import React, { useState } from "react";
import { s } from "./styled";
import axios from "axios";
function AddReply() {
  const [sender, setSender] = useState("");
  const [reply, setReply] = useState("");
  const [formData, setFormData] = useState({
    sender: "",
    reply: "",
  });
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async () => {
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    console.log(formData.sender);
    console.log(formData.reply);

    try {
      const response = await axios.post(
        `http://gomuring.com:8080/api/guest/${userId}/reply`,
        {
          senderName: formData.sender,
          replyContent: formData.reply,
        },
        {
          headers: {
            authorization: accessToken,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the data:", error);
    }
  };
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
    </>
  );
}

export default AddReply;
