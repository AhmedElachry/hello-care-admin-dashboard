import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const diseasesApiSlice = createApi({
  reducerPath: "diseases",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Diseases"],
  endpoints: (builder) => ({
    getDiseases: builder.query({
      query: () => "diseases",
      providesTags: ["Diseases"],
    }),
    addDisease: builder.mutation({
      query: (disease) => ({
        url: "diseases",
        method: "POST",
        body: disease,
      }),
      invalidatesTags: ["Diseases"],
    }),
    updateDisease: builder.mutation({
      query: (disease) => ({
        url: `diseases/${disease.id}`,
        method: "PUT",
        body: disease,
      }),
      invalidatesTags: ["Diseases"],
    }),
    deleteDisease: builder.mutation({
      query: ({ id }) => ({
        url: `diseases/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Diseases"],
    }),
  }),
});

export const {
  useGetDiseasesQuery,
  useAddDiseaseMutation,
  useUpdateDiseaseMutation,
  useDeleteDiseaseMutation,
} = diseasesApiSlice;
export default diseasesApiSlice;
