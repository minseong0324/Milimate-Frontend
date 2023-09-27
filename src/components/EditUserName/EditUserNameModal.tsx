import { useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
import { useDispatch } from "react-redux";
import { updateUserName } from "../Redux/Slices/userInfoSlice";
import SmallModal from "../../components/ErrorModal/ErrorModal"

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

function EditUserNameModalBasic({ setModalOpen }: PropsType) {
  const userId = localStorage.getItem("userId");
  const { accessToken } = useToken();
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  const [isSmallModalOpen, setSmallModalOpen] = useState(true);  // 기본값을 true로 설정

  const closeModal = () => {
    setModalOpen(false);
  };

  const UpdateUserNameBtn = async () => {
    if (newUserName.trim() == "") {
      alert("모든 필수 정보를 입력해주세요");
    } else {
      try { //
        const response = await axios.put(
          `https://api.mili-mate.com/api/myPage/${userId}/editUserName`,
          {
            userName: newUserName,
          },
          {
            headers: {
              authorization: `${accessToken}`,
            },
          }
        );
        if (response.status == 200) {
          alert("이름이 변경되었습니다.");
          dispatch(
            updateUserName({
              userName: newUserName,
            })
          );
          setModalOpen(false);
        }
      } catch (error: unknown) {
        //에러 일 경우
        if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error("Failed to fetch user info:", error);
  
          if (status === 404) {
            // 리소스를 찾을 수 없음
            alert('404')
          } else if (status === 500) {
            alert('500')
            // 서버 내부 오류
          } else {
            // 기타 상태 코드 처리
            alert('기타 에러')
          }
        }
        alert("이름 변경에 실패했습니다.");
        return null;
      }
    }
  };

  return (
    <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)}>
      <s.SmallCenterModalWrapper>
        <s.SmallModalTextsWrapper1>새 이름을 입력해주세요.</s.SmallModalTextsWrapper1>
        <s.InputContainer>
          <s.MoreInfoInputName
            type="text"
            value={newUserName}
            onChange={(e: { target: { value: string }; }) => setNewUserName(e.target.value)}
          />
        </s.InputContainer>
        <s.BtnDiv>
          <s.OkBtnStyle onClick={UpdateUserNameBtn}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.SmallCenterModalWrapper>
    </SmallModal>
  );
}

export default EditUserNameModalBasic;
