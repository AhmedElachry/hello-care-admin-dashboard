import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getHeaders() {
  const headers = new Headers();
  const token = localStorage.getItem("token");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");
  return headers;
}

const fetchDataApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alrayademo-back.appssquare.com/api/admin",
    prepareHeaders: (headers) => {
      return getHeaders();
    },
  }),
  tagTypes: ["JobTitles"],
  endpoints: (builder) => ({
    getJobTitles: builder.query({
      query: () => "/job-titles",
      providesTags: ["JobTitles"],
    }),
    addJobTitle: builder.mutation({
      query: (jobTitle) => ({
        url: "/job-titles",
        method: "POST",
        body: jobTitle,
      }),
      invalidatesTags: ["JobTitles"],
    }),
    updateJobTitle: builder.mutation({
      query: (jobTitle) => ({
        url: `/job-titles/${jobTitle.id}`,
        method: "PUT",
        body: jobTitle,
      }),
      invalidatesTags: ["JobTitles"],
    }),
    deleteJobTitle: builder.mutation({
      query: ({ id }) => ({
        url: `/job-titles/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["JobTitles"],
    }),
  }),
});

export const {
  useGetJobTitlesQuery,
  useAddJobTitleMutation,
  useUpdateJobTitleMutation,
  useDeleteJobTitleMutation,
} = fetchDataApiSlice;
export default fetchDataApiSlice;
