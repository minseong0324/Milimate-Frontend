import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userInfoReducer from "./Slices/userInfoSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 5,
};

const persistedReducer = persistReducer(persistConfig, userInfoReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
