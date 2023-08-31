type UserInfoState = {
    userName: string;
    enlistmentYear: string;
    enlistmentMonth: string;
    enlistmentday: string;
    completionYear: string;
    completionMonth: string;
    completionday: string;
};
export declare const setUserInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserInfoState, "userInfo/setUserInfo">, updateCompletionDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    completionYear: string;
    completionMonth: string;
    completionDay: string;
}, "userInfo/updateCompletionDate">, updateEnlistmentDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    enlistmentYear: string;
    enlistmentMonth: string;
    enlistmentDay: string;
}, "userInfo/updateEnlistmentDate">, updateUserName: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    userName: string;
}, "userInfo/updateUserName">;
declare const _default: import("redux").Reducer<UserInfoState>;
export default _default;
