import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const surgeriesApiSlice = createApi({
  reducerPath: "surgeries",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Surgeries"],
  endpoints: (builder) => ({
    getSurgeries: builder.query({
      query: () => "surgeries",
      providesTags: ["Surgeries"],
    }),
    addSurgery: builder.mutation({
      query: (surgery) => ({
        url: "surgeries",
        method: "POST",
        body: surgery,
      }),
      invalidatesTags: ["Surgeries"],
    }),
    updateSurgery: builder.mutation({
      query: (surgery) => ({
        url: `surgeries/${surgery.id}`,
        method: "PUT",
        body: surgery,
      }),
      invalidatesTags: ["Surgeries"],
    }),
    deleteSurgery: builder.mutation({
      query: ({ id }) => ({
        url: `surgeries/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Surgeries"],
    }),
  }),
});

export const {
  useGetSurgeriesQuery,
  useAddSurgeryMutation,
  useUpdateSurgeryMutation,
  useDeleteSurgeryMutation,
} = surgeriesApiSlice;
export default surgeriesApiSlice;
