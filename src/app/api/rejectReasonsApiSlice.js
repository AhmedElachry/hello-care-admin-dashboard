import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const rejectReasonsApiSlice = createApi({
  reducerPath: "rejectReasons",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["RejectReasons"],
  endpoints: (builder) => ({
    getRejectReasons: builder.query({
      query: () => "reject-reasons",
      providesTags: ["RejectReasons"],
    }),
    addRejectReason: builder.mutation({
      query: (rejectReason) => ({
        url: "reject-reasons",
        method: "POST",
        body: rejectReason,
      }),
      invalidatesTags: ["RejectReasons"],
    }),
    updateRejectReason: builder.mutation({
      query: (rejectReason) => ({
        url: `reject-reasons/${rejectReason.id}`,
        method: "PUT",
        body: rejectReason,
      }),
      invalidatesTags: ["RejectReasons"],
    }),
    deleteRejectReason: builder.mutation({
      query: ({ id }) => ({
        url: `reject-reasons/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["RejectReasons"],
    }),
  }),
});

export const {
  useGetRejectReasonsQuery,
  useAddRejectReasonMutation,
  useUpdateRejectReasonMutation,
  useDeleteRejectReasonMutation,
} = rejectReasonsApiSlice;
export default rejectReasonsApiSlice;
