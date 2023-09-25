import React, {useState, useEffect} from "react";
import {s} from "./style";
import {useParams, useNavigate} from "react-router-dom";
import CharacterImage from "../../assets/charater/MainCharacter.svg";
import {useLocation} from "react-router-dom";
import axios, {AxiosError} from "axios";
import DeleteModalBasic from "src/components/DeleteModalAcc/DeleteModal";
import UpdateCompletionModalBasic from "src/components/UpdatecompletionModal/UpdateCompletionModal";
import EditUserNameModalBasic from "src/components/EditUserName/EditUserNameModal";
import LogoutModalBasic from "src/components/LogoutModal/LogoutModal";
import {useSelector} from "react-redux";
import {RootState} from "src/components/Redux/store";
import UpdateEnlistmentModalBasic from "src/components/UpdateEnlistModal/UpdateEnlistmentModal";
import {BiChevronLeft} from "react-icons/bi";

type UserNameProps = {
    userName?: string;
};

function MyPage() {
    const userInfo = useSelector((state: RootState) => state.userInfo);
    console.log(userInfo);
    const navigate = useNavigate(); // useNavigate hook 사용
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] =
        useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출

    const [deleteAccModalOpen, setDeleteAccModalOpen] = useState(false);
    const [updateCompletionModalOpen, setUpdateCompletionModalOpen] =
        useState(false);
    const [editUserNameModalOpen, setEditUserNameModalOpen] = useState(false);
    const [userLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

    const [updateEnlistModalOpen, setUpdateEnlistModalOpen] = useState(false);

    const handleUnLoggedInModalClose = () => {
        setErrorModalOpen(false);
        navigate(`/guest/${userId}`);
    };

    // 컴포넌트가 마운트될 때 사용자 정보를 가져온다

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
    const updateEnlistmentBtn = () => {
        setUpdateEnlistModalOpen(true);
    };
    const editUserNameModalBtn = () => {
        setEditUserNameModalOpen(true);
    };
    const userLogouModalOpenBtn = () => {
        setUserLogoutModalOpen(true);
    };
    const goBackBtn = () => {
        navigate(-1);
    };
    return (
        <s.Wrapper>
            <s.IconLayout>
                <s.ButtonDesign onClick={goBackBtn}>
                    <BiChevronLeft size={24} color="#4c544b"/>
                </s.ButtonDesign>
                <s.TitleText>마이페이지</s.TitleText>
                <s.ButtonDesign onClick={() => {
                }}>
                    <BiChevronLeft size={24} color="#f2f1ee"/>
                </s.ButtonDesign>
            </s.IconLayout>
            <s.SoldierTagContainer>
                <s.SadCharImg></s.SadCharImg>
                <s.InfoDiv>
                    <s.UserNameText>김건휘 훈련병</s.UserNameText>
                    {/*<s.QuestionText>{state.question}</s.QuestionText>*/}
                    <s.userInfoContentDiv>
                        <s.UserEnlistmentKey>입대일</s.UserEnlistmentKey>
                        <s.UserEnlistmentText>2025년 09월 11일</s.UserEnlistmentText>
                    </s.userInfoContentDiv>
                    <s.userInfoContentDiv>
                        <s.UserEnlistmentKey>입대일</s.UserEnlistmentKey>
                        <s.UserEnlistmentText>2025년 09월 11일</s.UserEnlistmentText>
                    </s.userInfoContentDiv>
                    <s.SoldierTagImage/>
                </s.InfoDiv>
            </s.SoldierTagContainer>
            <s.MenuWrapper>
                <s.MenuDiv>
                    <s.PersonIcon></s.PersonIcon>
                    <s.ButtonStyle onClick={editUserNameModalBtn}>이름 변경하기</s.ButtonStyle>
                </s.MenuDiv>
                <s.Splice></s.Splice>
                <s.MenuDiv>
                    <s.EditIcon></s.EditIcon>
                    <s.ButtonStyle onClick={updateEnlistmentBtn}>
                        입대일 수정하기
                    </s.ButtonStyle>
                </s.MenuDiv>
                <s.Splice></s.Splice>
                <s.MenuDiv>
                    <s.EditIcon></s.EditIcon>
                    <s.ButtonStyle onClick={updateCompletionBtn}>
                        수료일 수정하기
                    </s.ButtonStyle>
                </s.MenuDiv>
                <s.Splice></s.Splice>
                <s.MenuDiv>
                    <s.VersionIcon></s.VersionIcon>
                    <s.VersionDiv>
                        <s.ButtonStyle>
                            버전정보
                        </s.ButtonStyle>
                        <s.VersionText>1.0.0</s.VersionText>
                    </s.VersionDiv>
                </s.MenuDiv>
                <s.Splice></s.Splice>
                <s.MenuDiv>
                    <s.LogoutIcon></s.LogoutIcon>
                    <s.ButtonStyle onClick={userLogouModalOpenBtn}>
                        로그아웃
                    </s.ButtonStyle>
                </s.MenuDiv>

                <s.Splice></s.Splice>
                <s.MenuDiv>
                    <s.DeleteIcon></s.DeleteIcon>
                    <s.ButtonStyle onClick={deleteAccBtn
                        }>
                        회원탈퇴하기
                    </s.ButtonStyle>
                </s.MenuDiv>
                <s.Splice></s.Splice>
            </s.MenuWrapper>
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
            {updateEnlistModalOpen && (
                <UpdateEnlistmentModalBasic setModalOpen={setUpdateEnlistModalOpen} />
            )}

            {editUserNameModalOpen && (
                <EditUserNameModalBasic setModalOpen={setEditUserNameModalOpen} />
            )}
            {userLogoutModalOpen && (
                <LogoutModalBasic
                    setModalOpen={setUserLogoutModalOpen}
                    contentText="로그아웃 하시겠습니까?"
                />
            )}
        </s.Wrapper>

        // <s.BackgroundContainer>
        //   <s.UserInfoContainer>
        //     <s.CharImgContainer>
        //       <s.CharImg src={CharacterImage} alt="Character Description" />
        //       <s.CharImgName>{userInfo.userName}</s.CharImgName>
        //     </s.CharImgContainer>
        //     <s.MainTextWrapper>
        //       <s.MainNameText>훈련병 {userInfo.userName}</s.MainNameText>
        //       <s.MainEnlistmentText>
        //         입대일 : {userInfo.enlistmentYear}.{userInfo.enlistmentMonth}.
        //         {userInfo.enlistmentday}
        //       </s.MainEnlistmentText>
        //     </s.MainTextWrapper>
        //   </s.UserInfoContainer>
        //   <s.MenuWrapper>
        //     <s.ButtonStyle onClick={deleteAccBtn}>• 회원탈퇴</s.ButtonStyle>
        //
        //     <s.ButtonStyle onClick={updateCompletionBtn}>
        //       • 수료일 수정하기
        //     </s.ButtonStyle>
        //     <s.ButtonStyle onClick={updateEnlistmentBtn}>
        //       • 입대일 수정하기
        //     </s.ButtonStyle>
        //     <s.ButtonStyle onClick={editUserNameModalBtn}>
        //       • 이름 변경하기
        //     </s.ButtonStyle>
        //
        //     <s.ButtonStyle onClick={userLogouModalOpenBtn}>
        //       • 로그아웃
        //     </s.ButtonStyle>
        //   </s.MenuWrapper>
        //   <s.DesignReferDiv>
        //     <s.DesignReferText>Designed by Freepik</s.DesignReferText>
        //     <s.DesignReferText>Designed by pikisuperstar</s.DesignReferText>
        //     <s.DesignReferText>Designed by pch.vector on Freepik</s.DesignReferText>
        //   </s.DesignReferDiv>
        //   {deleteAccModalOpen && (
        //     <DeleteModalBasic
        //       setModalOpen={setDeleteAccModalOpen}
        //       contentText="계정을 삭제하시겠습니까?"
        //     />
        //   )}
        //   {updateCompletionModalOpen && (
        //     <UpdateCompletionModalBasic
        //       setModalOpen={setUpdateCompletionModalOpen}
        //     />
        //   )}
        //   {updateEnlistModalOpen && (
        //     <UpdateEnlistmentModalBasic setModalOpen={setUpdateEnlistModalOpen} />
        //   )}
        //
        //   {editUserNameModalOpen && (
        //     <EditUserNameModalBasic setModalOpen={setEditUserNameModalOpen} />
        //   )}
        //   {userLogoutModalOpen && (
        //     <LogoutModalBasic
        //       setModalOpen={setUserLogoutModalOpen}
        //       contentText="로그아웃 하시겠습니까?"
        //     />
        //   )}
        //   {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
        //       {modalErrorContent}
        //   </ErrorModal> */}
        // </s.BackgroundContainer>



    );
}

export default MyPage;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
