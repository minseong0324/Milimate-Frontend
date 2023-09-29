import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserInfoState = {
    userName: string;
    enlistmentYear: string;
    enlistmentMonth: string;
    enlistmentday: string;
    completionYear: string;
    completionMonth: string;
    completionday: string;
};

const initialState: UserInfoState = {
    userName: "미설정 이름",
    enlistmentYear: "0000",
    enlistmentMonth: "00",
    enlistmentday: "00",
    completionYear: "0000",
    completionMonth: "00",
    completionday: "00",

};

//
const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
            return action.payload;
        },
        updateCompletionDate: (
            state,
            action: PayloadAction<{
                completionYear: string;
                completionMonth: string;
                completionDay: string;
            }>
        ) => {
            state.completionYear = action.payload.completionYear;
            state.completionMonth = action.payload.completionMonth;
            state.completionday = action.payload.completionDay;
        },

        updateEnlistmentDate: (
            state,
            action: PayloadAction<{
                enlistmentYear: string;
                enlistmentMonth: string;
                enlistmentDay: string;
            }>
        ) => {
            state.enlistmentYear = action.payload.enlistmentYear;
            state.enlistmentMonth = action.payload.enlistmentMonth;
            state.enlistmentday = action.payload.enlistmentDay;
        },

        updateUserName: (
            state,
            action: PayloadAction<{
                userName: string;
            }>
        ) => {
            state.userName = action.payload.userName;
        },
    },
});
export const {
    setUserInfo,
    updateCompletionDate,
    updateEnlistmentDate,
    updateUserName,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
