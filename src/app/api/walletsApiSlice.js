import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";

import getHeaders from "./getHeaders";

const walletsApiSlice = createApi({
  reducerPath: "wallets",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Wallets"],
  endpoints: (builder) => ({
    getWallets: builder.query({
      query: () => "wallets",
      providesTags: ["Wallets"],
    }),
    addWallet: builder.mutation({
      query: (wallet) => ({
        url: "wallets",
        method: "POST",
        body: wallet,
      }),
      invalidatesTags: ["Wallets"],
    }),
    updateWallet: builder.mutation({
      query: (wallet) => ({
        url: `wallets/${wallet.id}`,
        method: "PUT",
        body: wallet,
      }),
      invalidatesTags: ["Wallets"],
    }),
    deleteWallet: builder.mutation({
      query: ({ id }) => ({
        url: `wallets/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Wallets"],
    }),
  }),
});

export const {
  useGetWalletsQuery,
  useAddWalletMutation,
  useUpdateWalletMutation,
  useDeleteWalletMutation,
} = walletsApiSlice;
export default walletsApiSlice;
