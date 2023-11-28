import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import getHeaders from "./getHeaders";

export const logoutApiSlice = createApi({
  reducerPath: "logoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://front-intern.appssquare.com/api/admin",
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLogoutMutation } = logoutApiSlice;
