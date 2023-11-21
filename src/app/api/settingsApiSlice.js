import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
import getHeaders from "./getHeaders";

const settingsApiSlice = createApi({
  reducerPath: "settings",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Settings"],
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => "settings",
      providesTags: ["Settings"],
    }),
    updateSetting: builder.mutation({
      query: (setting) => ({
        url: `settings/${setting.id}`,
        method: "PUT",
        body: setting,
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingMutation } =
  settingsApiSlice;
export default settingsApiSlice;
