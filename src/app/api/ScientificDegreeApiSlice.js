import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

function getHeaders() {
  const headers = new Headers();
  const token = localStorage.getItem("token");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");
  return headers;
}

const ScientificDegreeApiSlice = createApi({
  reducerPath: "scientificDegree",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      return getHeaders();
    },
  }),
  tagTypes: ["ScientificDegree"],
  endpoints: (builder) => ({
    getScientificDegrees: builder.query({
      query: () => "scientific-degrees",
      providesTags: ["ScientificDegree"],
    }),
    addScientificDegree: builder.mutation({
      query: (scientificDegree) => ({
        url: "scientific-degrees",
        method: "POST",
        body: scientificDegree,
      }),
      invalidatesTags: ["ScientificDegree"],
    }),
    updateScientificDegree: builder.mutation({
      query: (scientificDegree) => ({
        url: `scientific-degrees/${scientificDegree.id}`,
        method: "PUT",
        body: scientificDegree,
      }),
      invalidatesTags: ["ScientificDegree"],
    }),
    deleteScientificDegree: builder.mutation({
      query: ({ id }) => ({
        url: `scientific-degrees/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["ScientificDegree"],
    }),
  }),
});

export const {
  useGetScientificDegreesQuery,
  useAddScientificDegreeMutation,
  useUpdateScientificDegreeMutation,
  useDeleteScientificDegreeMutation,
} = ScientificDegreeApiSlice;
export default ScientificDegreeApiSlice;
