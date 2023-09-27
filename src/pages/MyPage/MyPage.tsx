import React, {useState, useEffect} from "react";
import {s} from "./style";
import {useParams, useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";
import DeleteModalBasic from "src/components/DeleteModalAcc/DeleteModal";
import UpdateCompletionModalBasic from "src/components/UpdatecompletionModal/UpdateCompletionModal";
import EditUserNameModalBasic from "src/components/EditUserName/EditUserNameModal";
import LogoutModalBasic from "src/components/LogoutModal/LogoutModal";
import {useSelector} from "react-redux";
import {RootState} from "src/components/Redux/store";
import UpdateEnlistmentModalBasic from "src/components/UpdateEnlistModal/UpdateEnlistmentModal";
import SmallModal from "../../components/ErrorModal/ErrorModal"

type UserNameProps = {
    userName?: string;
};

function MyPage() {
    const userInfo = useSelector((state: RootState) => state.userInfo);
    console.log(userInfo);
    const navigate = useNavigate(); // useNavigate hook 사용
    const [isSmallModalOpen, setSmallModalOpen] = useState(false);
    const [modalSmallContent, setModalSmallContent] =
        useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
        const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] =
        useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
    const {userId} = useParams<{ userId: string }>(); // URL에서 userId 값을 추출

    const [deleteAccModalOpen, setDeleteAccModalOpen] = useState(false);
    const [updateCompletionModalOpen, setUpdateCompletionModalOpen] =
        useState(false);
    const [editUserNameModalOpen, setEditUserNameModalOpen] = useState(false);
    const [userLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

    const [updateEnlistModalOpen, setUpdateEnlistModalOpen] = useState(false);

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
        setModalOpen(true);
    };
    const userLogouModalOpenBtn = () => {
        setUserLogoutModalOpen(true);
        setModalOpen(true);
    };
    const goBackBtn = () => {
        navigate(-1);
    };
    return (
        <>
        <s.BackButton onClick = {goBackBtn}/>
    
            <s.BackgroundContainer>
            <s.Container>
                <s.Text>
                마이페이지
                </s.Text>
            </s.Container>
            <s.Wrapper>
            <s.SoldierTagContainer>
                <s.SoldierTagImage/>
                <s.CharImg/>
                <s.InfoDiv>
                    <s.TextsStyle>김건휘 훈련병</s.TextsStyle>
                        <s.TextsStyle_1>입대일</s.TextsStyle_1>
                        <s.TextsStyle2>2025년 09월 11일</s.TextsStyle2>
  
                        <s.TextsStyle_2>수료일</s.TextsStyle_2>
                        <s.TextsStyle2_1>2025년 09월 11일</s.TextsStyle2_1>
                </s.InfoDiv>
            </s.SoldierTagContainer>
            <s.MenuWrapper>
                <s.MenuDiv>
                    <s.PersonIcon/>
                    <s.ButtonStyle onClick={editUserNameModalBtn}>이름 변경하기</s.ButtonStyle>
                </s.MenuDiv>
                {/*<s.Splice></s.Splice>*/}
                <s.MenuDiv>
                    <s.EditIcon/>
                    <s.ButtonStyle onClick={updateEnlistmentBtn}>
                        입대일 수정하기
                    </s.ButtonStyle>
                </s.MenuDiv>

                <s.MenuDiv>
                    <s.EditIcon/>
                    <s.ButtonStyle onClick={updateCompletionBtn}>
                        수료일 수정하기
                    </s.ButtonStyle>
                </s.MenuDiv>

                <s.MenuDiv>
                    <s.LogoutIcon/>
                    <s.ButtonStyle onClick={userLogouModalOpenBtn}>
                        로그아웃
                    </s.ButtonStyle>
                </s.MenuDiv>


                <s.MenuDiv>
                    <s.DeleteIcon/>
                    <s.ButtonStyle onClick={deleteAccBtn
                        }>
                        회원탈퇴하기
                    </s.ButtonStyle>
                </s.MenuDiv>

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

            <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)} >
                {modalSmallContent}
            </SmallModal>

        </s.BackgroundContainer>
        </>
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
