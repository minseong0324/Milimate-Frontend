/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    userInfo: {
        userName: string;
        enlistmentYear: string;
        enlistmentMonth: string;
        enlistmentday: string;
        completionYear: string;
        completionMonth: string;
        completionday: string;
    } & import("redux-persist/es/persistReducer").PersistPartial;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<any, import("redux").AnyAction>]>>;
export default store;
export declare const persistor: import("redux-persist").Persistor;
export type RootState = ReturnType<typeof store.getState>;
