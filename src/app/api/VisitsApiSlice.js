import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
import getHeaders from "./getHeaders";

const visitsApiSlice = createApi({
  reducerPath: "visits",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
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

export const { useGetVisitsQuery, useUpdateVisitMutation } = visitsApiSlice;
export default visitsApiSlice;
