import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const bloodTypesApiSlice = createApi({
  reducerPath: "bloodTypes",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["BloodTypes"],
  endpoints: (builder) => ({
    getBloodTypes: builder.query({
      query: () => "blood-types",
      providesTags: ["BloodTypes"],
    }),
    addBloodType: builder.mutation({
      query: (bloodType) => ({
        url: "blood-types",
        method: "POST",
        body: bloodType,
      }),
      invalidatesTags: ["BloodTypes"],
    }),
    updateBloodType: builder.mutation({
      query: (bloodType) => ({
        url: `blood-types/${bloodType.id}`,
        method: "PUT",
        body: bloodType,
      }),
      invalidatesTags: ["BloodTypes"],
    }),
    deleteBloodType: builder.mutation({
      query: ({ id }) => ({
        url: `blood-types/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["BloodTypes"],
    }),
  }),
});

export const {
  useGetBloodTypesQuery,
  useAddBloodTypeMutation,
  useUpdateBloodTypeMutation,
  useDeleteBloodTypeMutation,
} = bloodTypesApiSlice;
export default bloodTypesApiSlice;
