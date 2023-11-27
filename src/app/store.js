import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice/sidebarSlice";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./api/authApiSlice";
import ScientificDegreeApiSlice from "./api/ScientificDegreeApiSlice";
import scientificTitleApiSlice from "./api/scientificTitleApiSlice";
import visitsApiSlice from "./api/VisitsApiSlice";
import timeoutsApiSlice from "./api/timeOutApiSlice";
import ordersApiSlice from "./api/ordersApiSlice";
import settingsApiSlice from "./api/settingsApiSlice";
import contactUsApiSlice from "./api/contactUSApiSlice";
import statisticsApiSlice from "./api/statisticsApiSlice";
import rejectReasonsApiSlice from "./api/rejectReasonsApiSlice";
import bloodTypesApiSlice from "./api/bloodTypesApiSlice";
import diseasesApiSlice from "./api/diseasesApiSlice";
import allergiesApiSlice from "./api/allergiesApiSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [visitsApiSlice.reducerPath]: visitsApiSlice.reducer,
    [ScientificDegreeApiSlice.reducerPath]: ScientificDegreeApiSlice.reducer,
    [scientificTitleApiSlice.reducerPath]: scientificTitleApiSlice.reducer,
    [timeoutsApiSlice.reducerPath]: timeoutsApiSlice.reducer,
    [ordersApiSlice.reducerPath]: ordersApiSlice.reducer,
    [settingsApiSlice.reducerPath]: settingsApiSlice.reducer,
    [contactUsApiSlice.reducerPath]: contactUsApiSlice.reducer,
    [statisticsApiSlice.reducerPath]: statisticsApiSlice.reducer,
    [rejectReasonsApiSlice.reducerPath]: rejectReasonsApiSlice.reducer,
    [bloodTypesApiSlice.reducerPath]: bloodTypesApiSlice.reducer,
    [diseasesApiSlice.reducerPath]: diseasesApiSlice.reducer,
    [allergiesApiSlice.reducerPath]: allergiesApiSlice.reducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(visitsApiSlice.middleware)
      .concat(ScientificDegreeApiSlice.middleware)
      .concat(scientificTitleApiSlice.middleware)
      .concat(timeoutsApiSlice.middleware)
      .concat(ordersApiSlice.middleware)
      .concat(settingsApiSlice.middleware)
      .concat(contactUsApiSlice.middleware)
      .concat(statisticsApiSlice.middleware)
      .concat(rejectReasonsApiSlice.middleware)
      .concat(bloodTypesApiSlice.middleware)
      .concat(diseasesApiSlice.middleware)
      .concat(allergiesApiSlice.middleware)
      .concat(authApi.middleware),
  devTools: true,
});

export default store;
