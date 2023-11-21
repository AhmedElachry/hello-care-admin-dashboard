import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const scientificTitleApiSlice = createApi({
  reducerPath: "scientificTitle",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      return getHeaders();
    },
  }),
  tagTypes: ["ScientificTitle"],
  endpoints: (builder) => ({
    getScientificTitles: builder.query({
      query: () => "scientific-titles",
      providesTags: ["ScientificTitle"],
    }),
    addScientificTitle: builder.mutation({
      query: (scientificTitle) => ({
        url: "scientific-titles",
        method: "POST",
        body: scientificTitle,
      }),
      invalidatesTags: ["ScientificTitle"],
    }),
    updateScientificTitle: builder.mutation({
      query: (scientificTitle) => ({
        url: `scientific-titles/${scientificTitle.id}`,
        method: "PUT",
        body: scientificTitle,
      }),
      invalidatesTags: ["ScientificTitle"],
    }),
    deleteScientificTitle: builder.mutation({
      query: ({ id }) => ({
        url: `scientific-titles/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["ScientificTitle"],
    }),
  }),
});

export const {
  useGetScientificTitlesQuery,
  useAddScientificTitleMutation,
  useUpdateScientificTitleMutation,
  useDeleteScientificTitleMutation,
} = scientificTitleApiSlice;
export default scientificTitleApiSlice;
