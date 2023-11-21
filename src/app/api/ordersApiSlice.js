import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./apiConfig";
import getHeaders from "./getHeaders";

const ordersApiSlice = createApi({
  reducerPath: "orders",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: () => {
      return getHeaders();
    },
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "orders",
      providesTags: ["Orders"],
    }),
    updateOrder: builder.mutation({
      query: (order) => ({
        url: `orders/${order.id}`,
        method: "PUT",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersQuery, useUpdateOrderMutation } = ordersApiSlice;
export default ordersApiSlice;
