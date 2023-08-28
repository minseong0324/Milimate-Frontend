import React, { useEffect, useState } from "react";
import { s } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalBasic from "src/components/SimpleModal/SimpleModal";
import { useToken } from "src/contexts/TokenProvider/TokenProvider";
function MainScreen() {
  interface ResponseData {
    userName: string;
    year: number;
    month: number;
    day: number;
    nowData: number;
    endDate: number;
    todayQuestion: string;
    isInsertedEndDate: boolean;
  }
  const accessToken = useToken();

  const navigate = useNavigate();
  const handleCopyClipBoard = async () => {
    const userId = localStorage.getItem("userId");
    const linkToShare = `http://localhost:3000/api/guest/${userId}`;

    try {
      await navigator.clipboard.writeText(linkToShare);
      console.log(linkToShare);
      setModalOpen(true); // 모달창 띄우기
    } catch (err) {
      console.log(err);
    }
  };

  // const testToken = async () => {
  //   const userId = await localStorage.getItem("userId");
  //   console.log(userId);
  //   if (userId == null) {
  //     console.log("널 판단");
  //   }
  // };
  // testToken();
  const navigateQuestionListScreen = async () => {
    navigate("/QuestionListScreen");
  };

  const [lastCompletionDate, setLastCompletionDate] = useState("0");
  const [data, setData] = useState<ResponseData | null>(null);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const userId = await localStorage.getItem("userId");
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${userId}/home`,
          {
            headers: {
              authorization: `${accessToken}`,
            },
          }
        );
        const responseData: ResponseData = {
          ...response.data,
          year: Number(response.data.year),
          month: Number(response.data.month),
          day: Number(response.data.day),
          nowDate: Number(response.data.nowDate),
          endDate: Number(response.data.endDate),
        };
        setData(responseData); // 형변를환된 응답 데이터 상태에 할당
      } catch (e) {
        console.log(e);
      }
    };
    //fetchData();
  }, [accessToken]);

  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const [tmpBool, setTempBool] = useState(false);
  const [tmpReply, setTmpReply] = useState(1);
  const questionClick = (day: string, question: string) => {
    console.log("이벤트");
    navigate("/replyscreen", { state: { day, question } });
  };

  const profileImgClick = (
    year: string,
    month: string,
    day: string,
    name: string
  ) => {
    navigate("/mypage", { state: { year, month, day, name } });
  };

  const intendAddCompletion = (
    year: string,
    month: string,
    day: string,
    name: string
  ) => {
    navigate("/mypage", { state: { year, month, day, name } });
  };
  return (
    <>
      <s.WrapperLayout>
        <s.test>
          <s.ProfileWrapper>
            <s.tmpCharImg
              onClick={() => {
                profileImgClick("2020", "05", "18", "김건휘");
              }}
            ></s.tmpCharImg>
            <s.MainTextWrapper>
              <s.MainNameText>훈련병 김건휘</s.MainNameText>
              <s.MainEnlistmentText>입대일 : 2020. 05. 18</s.MainEnlistmentText>
            </s.MainTextWrapper>
          </s.ProfileWrapper>

          <s.ImageContainer>
            <s.TodayQuestionBtn>
              "입대전 저는 어떤 사람이었나요?"
            </s.TodayQuestionBtn>

            {tmpReply > 1 ? (
              <s.CheckReplyBtn>"어제의 답변 확인"</s.CheckReplyBtn>
            ) : (
              <s.NoneReplText>아직은 답변이 없습니다.</s.NoneReplText>
            )}

            <s.TotalQuestionList onClick={navigateQuestionListScreen}>
              "질문 리스트 확인"
            </s.TotalQuestionList>
            <s.ShareQuestion onClick={handleCopyClipBoard}>
              "공유하기"
            </s.ShareQuestion>

            {tmpBool == true ? (
              <s.MyCompletion>"수료일 D-30"</s.MyCompletion>
            ) : (
              <s.NeedAddCompletion
                onClick={() =>
                  intendAddCompletion("2020", "05", "18", "김건휘")
                }
              >
                "수료일을 입력해주세요"
              </s.NeedAddCompletion>
            )}

            <s.CabinetImg></s.CabinetImg>
          </s.ImageContainer>
        </s.test>
      </s.WrapperLayout>
      {modalOpen && (
        <ModalBasic
          setModalOpen={setModalOpen}
          contentText="링크가 복사되었습니다."
          modalType={0}
        />
      )}
    </>
  );
}

export default MainScreen;
