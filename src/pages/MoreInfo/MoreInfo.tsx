import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { s } from "./style";
import { useDispatch } from "react-redux";
import { setUserInfo } from "src/components/Redux/Slices/userInfoSlice";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
function MoreInfo() {
  const userId = localStorage.getItem("userId");
  const { accessToken, refreshToken } = useToken();
  const [userName, setUserName] = useState("");
  const [enlistmentYear, setEnlistmentYear] = useState("");
  const [enlistmentMonth, setEnlistmentMonth] = useState("");
  const [enlistmentDay, setEnlistmentDay] = useState("");
  const [completionYear, setcompletionYear] = useState("");
  const [completionMonth, setcompletionMonth] = useState("");
  const [completionDay, setcompletionDay] = useState("");
  const navigate = useNavigate(); // useNavigate hook 사용

  // 회원가입 처리 함수
  const dispatch = useDispatch();

    const isLeapYear = (year: number) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    const addDaysToDate = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    let finalCompletionYear = completionYear;
    let finalCompletionMonth = completionMonth;
    let finalCompletionDay = completionDay;

    const getMaxDayOfMonth = (month: number, year: number) => {
        switch (month) {
            case 2:
                return isLeapYear(year) ? 29 : 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                return 31;
        }
    };

    const handleMoreInfo = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!userName || !enlistmentYear.trim() || !enlistmentMonth.trim() || !enlistmentDay.trim()) {
            return alert("필수 정보를 입력해주세요!");
        }

        if (
            !isNumeric(enlistmentYear.trim()) ||
            !isNumeric(enlistmentMonth.trim()) ||
            !isNumeric(enlistmentDay.trim()) ||
            (completionYear.trim() && !isNumeric(completionYear.trim())) ||
            (completionMonth.trim() && !isNumeric(completionMonth.trim())) ||
            (completionDay.trim() && !isNumeric(completionDay.trim()))
        ) {
            return alert("날짜를 숫자로 입력해주세요!");
        }

        if (
            parseInt(enlistmentMonth.trim()) < 1 ||
            parseInt(enlistmentMonth.trim()) > 12 ||
            (completionMonth.trim() &&
                (parseInt(completionMonth.trim()) < 1 || parseInt(completionMonth.trim()) > 12))
        ) {
            return alert("월은 1 ~ 12 사이의 값이어야 합니다!");
        }

        const enlistDate = new Date(
            parseInt(enlistmentYear.trim()),
            parseInt(enlistmentMonth.trim()) - 1,
            parseInt(enlistmentDay.trim())
        );
        const completeDate = new Date(
            parseInt(completionYear.trim()),
            parseInt(completionMonth.trim()) - 1,
            parseInt(completionDay.trim())
        );

        if (completeDate < enlistDate) {
            return alert("입대일은 수료일보다 미래일 수 없습니다!");
        }

        if (
            !completionYear.trim() ||
            !completionMonth.trim() ||
            !completionDay.trim() ||
            !isNumeric(completionYear.trim()) ||
            !isNumeric(completionMonth.trim()) ||
            (completionDay.trim() && !isNumeric(completionDay.trim())) ||
            parseInt(completionMonth.trim()) < 1 ||
            parseInt(completionMonth.trim()) > 12 ||
            (completionDay.trim() &&
                parseInt(completionDay.trim()) >
                getMaxDayOfMonth(parseInt(completionMonth.trim()), parseInt(completionYear.trim())))
        ) {
            const newCompletionDate = addDaysToDate(enlistDate, 60);
            finalCompletionYear = newCompletionDate.getFullYear().toString();
            finalCompletionMonth = (newCompletionDate.getMonth() + 1).toString();
            finalCompletionDay = newCompletionDate.getDate().toString();
            setcompletionYear(finalCompletionYear);
            setcompletionMonth(finalCompletionMonth);
            setcompletionDay(finalCompletionDay);
            return alert('유효하지 않은 수료일입니다.\n' +
                '수료일에 대하여 자동으로 입대일의 59일 뒤로 설정하였습니다.' +
                '\n마이페이지에서 수정 가능합니다!!')
        }

        const today = new Date();
        console.log("수료일", completeDate);
        console.log("오늘 날짜", today);
        if (completeDate <= today) {
            return alert("수료일은 현재 날짜보다 미래여야 합니다!");
        }

        const enlistmentDayInt = parseInt(enlistmentDay.trim());
        const completionDayInt = parseInt(completionDay.trim());

        if (
            enlistmentDayInt >
            getMaxDayOfMonth(parseInt(enlistmentMonth.trim()), parseInt(enlistmentYear.trim())) ||
            completionDayInt >
            getMaxDayOfMonth(parseInt(completionMonth.trim()), parseInt(completionYear.trim()))
        ) {
            return alert("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
        }

        try {

            const response = await axios.post(
                `https://api.mili-mate.com/api/user/${userId}/moreInfo`,
                {
                    userName,
                    enlistmentYear,
                    enlistmentMonth,
                    enlistmentDay,
                    completionYear: finalCompletionYear,
                    completionMonth: finalCompletionMonth,
                    completionDay: finalCompletionDay,
                },
                {
                    headers: {
                        authorization: `${accessToken}`,
                    },
                }
            );

            dispatch(
                setUserInfo({
                    userName: userName,
                    enlistmentYear: enlistmentYear,
                    enlistmentMonth: enlistmentMonth,
                    enlistmentday: enlistmentDay,
                    completionYear: completionYear,
                    completionMonth: completionMonth,
                    completionday: completionDay,
                })
            );
            navigate("/showcharacter");
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const status = error?.response?.status;
                const errorCode = error?.response?.data?.code;
                if (status === 404) {
                    alert("추가정보를 입력하는 데에 실패했습니다.");
                } else if (status === 500) {
                    alert("서버와의 연결이 원활하지 않습니다.");
                } else if (status === 400 && errorCode === "OVER 60") {
                    alert('입대일과 수료일의 차이가 60일 이하이어야 합니다.');
                } else {
                    alert("추가정보를 입력하는 데에 실패했습니다.");
                }
            }
            return null;
        }
    };

    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    };

    const handleNavigate = () => {
        navigate('/signup');
    }

  return (
    <>
    <s.BackButton onClick = {handleNavigate}/>

    <s.BackgroundContainer>

      <s.Container>
        <s.Text>
          상세정보 입력
        </s.Text>
      </s.Container>
      <s.Wrapper>
        <s.MoreInfoForm>
            <s.TextsStyle>이름</s.TextsStyle>
            <s.MoreInfoInput
              type="text"
              placeholder="이름을 입력해주세요"
              value={userName}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setUserName(e.target.value)}
              maxLength={5}
            />
            <s.TextsStyle>입대일</s.TextsStyle>
            <s.InputContainer>
            <s.MoreInfoInputYear
              type="text"
              placeholder="YYYY"
              value={enlistmentYear}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnlistmentYear(e.target.value.replace(/\s/g, ''))}
              maxLength={4}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="MM"
              value={enlistmentMonth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnlistmentMonth(e.target.value.replace(/\s/g, ''))}
              maxLength={2}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="DD"
              value={enlistmentDay}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnlistmentDay(e.target.value.replace(/\s/g, ''))}
              maxLength={2}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
            <s.TextsStyle>수료일</s.TextsStyle>
            <s.InputContainer>
            <s.MoreInfoInputYear
              type="text"
              placeholder="YYYY"
              value={completionYear}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionYear(e.target.value.replace(/\s/g, ''))}
              maxLength={4}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="MM"
              value={completionMonth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionMonth(e.target.value.replace(/\s/g, ''))}
              maxLength={2}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="DD"
              value={completionDay}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionDay(e.target.value.replace(/\s/g, ''))}
              maxLength={2}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
          <s.ButtonWrapper>
            <s.Button onClick={handleMoreInfo} type="submit">
            가입하기
          </s.Button>
          </s.ButtonWrapper>
          <s.RequiredInfoText>
            이름, 입대일은 필수정보입니다.
          </s.RequiredInfoText>
          <s.RequiredInfoText>
            수료일은 선택정보입니다. 마이페이지에서 수정 가능합니다.
          </s.RequiredInfoText>
        </s.MoreInfoForm>

        </s.Wrapper>
    </s.BackgroundContainer>
    </>
  );
}

export default MoreInfo;
