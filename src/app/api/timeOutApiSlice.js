import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
//
import getHeaders from "./getHeaders";

const timeoutsApiSlice = createApi({
  reducerPath: "timeouts",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Timeouts"],
  endpoints: (builder) => ({
    getTimeouts: builder.query({
      query: () => "timeouts",
      providesTags: ["Timeouts"],
    }),
    updateTimeout: builder.mutation({
      query: (timeout) => ({
        url: `timeouts/${timeout.id}`,
        method: "PUT",
        body: timeout,
      }),
      invalidatesTags: ["Timeouts"],
    }),
  }),
});

export const { useGetTimeoutsQuery, useUpdateTimeoutMutation } =
  timeoutsApiSlice;
export default timeoutsApiSlice;
