import React from "react";
import { s } from "./style";

function ReplyScreen() {
  const text =
    "여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요 " +
    " 텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요. " +
    " 텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요." +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.여기에 원하는 텍스트를 입력하세요." +
    "텍스트의 길이에 따라 말풍선의 크기가 조절됩니다.";

  return (
    <s.Wrapper>
      <s.BubbleContainer>
        <s.BubbleImage />
        <s.BubbleText>{text}</s.BubbleText>
      </s.BubbleContainer>
    </s.Wrapper>
  );
}
export default ReplyScreen;
