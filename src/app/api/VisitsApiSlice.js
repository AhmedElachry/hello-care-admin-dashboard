import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import baseUrl from "./apiConfig";
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

const visitsApiSlice = createApi({
  reducerPath: "visits",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      return getHeaders();
    },
  }),
  tagTypes: ["Visits"],
  endpoints: (builder) => ({
    getVisits: builder.query({
      query: () => "visits",
      providesTags: ["Visits"],
    }),
    updateVisit: builder.mutation({
      query: (visit) => ({
        url: `visits/${visit.id}`,
        method: "PUT",
        body: visit,
      }),
      invalidatesTags: ["Visits"],
    }),
  }),
});

export const { useGetVisitsQuery, useUpdateVisitsMutation } = visitsApiSlice;
export default visitsApiSlice;
