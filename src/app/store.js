import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice/sidebarSlice";
import apiSlice from "./api/dataApiSlice";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./api/authApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApi.middleware),
  devTools: true,
});

export default store;
