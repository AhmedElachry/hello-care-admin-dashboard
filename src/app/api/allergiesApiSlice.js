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
    addAllergy: builder.mutation({
      query: (allergy) => ({
        url: "allergies",
        method: "POST",
        body: allergy,
      }),
      invalidatesTags: ["Allergies"],
    }),
    updateAllergy: builder.mutation({
      query: (allergy) => ({
        url: `allergies/${allergy.id}`,
        method: "PUT",
        body: allergy,
      }),
      invalidatesTags: ["Allergies"],
    }),
    deleteAllergy: builder.mutation({
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
  useAddAllergyMutation,
  useUpdateAllergyMutation,
  useDeleteAllergyMutation,
} = allergiesApiSlice;
export default allergiesApiSlice;
