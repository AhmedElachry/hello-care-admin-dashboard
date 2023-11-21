import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
import getHeaders from "./getHeaders";

const contactUsApiSlice = createApi({
  reducerPath: "contactUs",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["ContactUs"],
  endpoints: (builder) => ({
    getContactUs: builder.query({
      query: () => "contact-us",
      providesTags: ["ContactUs"],
    }),
  }),
});

export const { useGetContactUsQuery } = contactUsApiSlice;
export default contactUsApiSlice;
