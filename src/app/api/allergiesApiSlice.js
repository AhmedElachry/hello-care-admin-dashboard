import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const allergiesApiSlice = createApi({
  reducerPath: "allergies",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Allergies"],
  endpoints: (builder) => ({
    getAllergies: builder.query({
      query: () => "allergies",
      providesTags: ["Allergies"],
    }),
    addAllergie: builder.mutation({
      query: (allergie) => ({
        url: "allergies",
        method: "POST",
        body: allergie,
      }),
      invalidatesTags: ["Allergies"],
    }),
    updateAllergie: builder.mutation({
      query: (allergie) => ({
        url: `allergies/${allergie.id}`,
        method: "PUT",
        body: allergie,
      }),
      invalidatesTags: ["Allergies"],
    }),
    deleteAllergie: builder.mutation({
      query: ({ id }) => ({
        url: `allergies/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Allergies"],
    }),
  }),
});

export const {
  useGetAllergiesQuery,
  useAddAllergieMutation,
  useUpdateAllergieMutation,
  useDeleteAllergieMutation,
} = allergiesApiSlice;
export default allergiesApiSlice;
