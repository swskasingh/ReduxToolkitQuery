// service/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useFetchProductsQuery } = api;
