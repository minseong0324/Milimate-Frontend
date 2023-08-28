import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import CharacterImage from "../../assets/charater/character.svg";
import { useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";
import DeleteModalBasic from "src/components/DeleteModalAcc/DeleteModal";
import UpdateCompletionModalBasic from "src/components/UpdatecompletionModal/UpdateCompletionModal";
import EditUserNameModalBasic from "src/components/EditUserName/EditUserNameModal";
import LogoutModalBasic from "src/components/LogoutModal/LogoutModal";
import { useToken } from "src/contexts/TokenProvider/TokenProvider";

type UserNameProps = {
  userName?: string;
};
interface UserInfo {
  year: string;
  month: string;
  day: string;
  name: string;
}
function MyPage({ year, month, day, name }: UserInfo) {
  const { state } = useLocation();

  const [userName, setUserName] = useState<string>("김민성");
  const [todayQuestion, setTodayQuestion] =
    useState<string>("저는 입대 전 어떤 사람이었나요?");
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 값을 추출

  const [deleteAccModalOpen, setDeleteAccModalOpen] = useState(false);
  const [updateCompletionModalOpen, setUpdateCompletionModalOpen] =
    useState(false);
  const [editUserNameModalOpen, setEditUserNameModalOpen] = useState(false);
  const [userLogoutModalOpen, setUserLogoutModalOpen] = useState(false);
  const accessToken = useToken();
  const getUserInfoFromServer = async (userId: string) => {
    try {
      // 백엔드 서버에 GET 요청을 보냅니다.
      const response = await axios.get(
        `http://localhost:8080/api/guest/${userId}/reply`,
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );

      // 응답에서 사용자 정보를 추출합니다.
      const userInfo = response.data;

      return {
        todayQuestion: userInfo.todayQuestion, // 오늘의 질문
        userName: userInfo.userName, // 사용자 이름을 추가합니다.
      };
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;

        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
            <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
            <s.ErrorModalTextsWrapper2>
              불러오지 못했어요.
            </s.ErrorModalTextsWrapper2>
            <s.ModalButton onClick={handleUnLoggedInModalClose}>
              새로고침하기
            </s.ModalButton>
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
      setErrorModalOpen(true);
      return null;
    }
  };

  const handleUnLoggedInModalClose = () => {
    setErrorModalOpen(false);
    navigate(`/guest/${userId}`);
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져온다
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        const userInfo = await getUserInfoFromServer(userId);
        if (userInfo) {
          // userInfo가 유효한 경우에만 상태 업데이트
          setUserName(userInfo.userName || "김민성"); // 사용자 이름을 상태 변수에 저장
          setTodayQuestion(
            userInfo.todayQuestion || "저는 입대 전 어떤 사람이었나요?"
          ); // 오늘의 질문을 상태 변수에 저장
        }
      }
    };
    fetchUserInfo();
  }, [userId]);

  // 서비스 설명 함수
  const handleGoSend = () => {
    navigate(`/send/${userId}`);
  };

  const deleteAccBtn = () => {
    setDeleteAccModalOpen(true);
  };
  const updateCompletionBtn = () => {
    setUpdateCompletionModalOpen(true);
  };
  const editUserNameModalBtn = () => {
    setEditUserNameModalOpen(true);
  };
  const userLogouModalOpenBtn = () => {
    setUserLogoutModalOpen(true);
  };
  return (
    <s.BackgroundContainer>
      <s.UserInfoContainer>
        <s.CharImgContainer>
          <s.CharImg src={CharacterImage} alt="Character Description" />
          <s.CharImgName>{userName}</s.CharImgName>
        </s.CharImgContainer>
        <s.MainTextWrapper>
          <s.MainNameText>훈련병 {state.name}</s.MainNameText>
          <s.MainEnlistmentText>
            입대일 : {state.year}.{state.month}.{state.day}
          </s.MainEnlistmentText>
        </s.MainTextWrapper>
      </s.UserInfoContainer>
      <s.MenuWrapper>
        <s.ButtonStyle onClick={deleteAccBtn}>• 회원탈퇴</s.ButtonStyle>

        <s.ButtonStyle onClick={updateCompletionBtn}>
          • 수료일 수정하기
        </s.ButtonStyle>
        <s.ButtonStyle onClick={editUserNameModalBtn}>
          • 이름 변경하기
        </s.ButtonStyle>
        <s.ButtonStyle onClick={userLogouModalOpenBtn}>
          • 로그아웃
        </s.ButtonStyle>
      </s.MenuWrapper>
      <s.DesignReferDiv>
        <s.DesignReferText>Designed by Freepik</s.DesignReferText>
        <s.DesignReferText>Designed by pikisuperstar</s.DesignReferText>
        <s.DesignReferText>Designed by pch.vector on Freepik</s.DesignReferText>
      </s.DesignReferDiv>
      {deleteAccModalOpen && (
        <DeleteModalBasic
          setModalOpen={setDeleteAccModalOpen}
          contentText="계정을 삭제하시겠습니까?"
        />
      )}
      {updateCompletionModalOpen && (
        <UpdateCompletionModalBasic
          setModalOpen={setUpdateCompletionModalOpen}
        />
      )}
      {editUserNameModalOpen && (
        <EditUserNameModalBasic
          setModalOpen={setEditUserNameModalOpen}
          userName={state.name}
        />
      )}
      {userLogoutModalOpen && (
        <LogoutModalBasic
          setModalOpen={setUserLogoutModalOpen}
          contentText="로그아웃 하시겠습니까?"
        />
      )}
      {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
    </s.BackgroundContainer>
  );
}

export default MyPage;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
