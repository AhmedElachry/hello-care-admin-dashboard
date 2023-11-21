import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
import getHeaders from "./getHeaders";

const statisticsApiSlice = createApi({
  reducerPath: "statistics",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["statistics"],
  endpoints: (builder) => ({
    getstatistics: builder.query({
      query: () => "statistics",
      providesTags: ["statistics"],
    }),
  }),
});

export const { useGetstatisticsQuery } = statisticsApiSlice;
export default statisticsApiSlice;
