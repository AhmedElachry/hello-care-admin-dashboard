import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice/sidebarSlice";
// import apiSlice from "./api/dataApiSlice";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./api/authApiSlice";
import ScientificDegreeApiSlice from "./api/ScientificDegreeApiSlice";
// import ScientificTitleApiSlice from "./api/ScientificTitleApiSlice";
import scientificTitleApiSlice from "./api/scientificTitleApiSlice";
import visitsApiSlice from "./api/VisitsApiSlice";

const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [ScientificDegreeApiSlice.reducerPath]: ScientificDegreeApiSlice.reducer,
    [scientificTitleApiSlice.reducerPath]: scientificTitleApiSlice.reducer,
    [visitsApiSlice.reducerPath]: visitsApiSlice.reducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // .concat(apiSlice.middleware)
      .concat(scientificTitleApiSlice.middleware)
      .concat(visitsApiSlice.middleware)
      .concat(ScientificDegreeApiSlice.middleware)
      .concat(authApi.middleware),
  devTools: true,
});

export default store;
