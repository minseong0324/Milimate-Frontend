import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  userName: "",
  enlistmentYear: "",
  enlistmentMonth: "",
  enlistmentday: "",
  completionYear: "",
  completionMonth: "",
  completionday: "",
};

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
export const { setUserInfo, updateCompletionDate, updateUserName } =
  userInfoSlice.actions;
export default userInfoSlice.reducer;
