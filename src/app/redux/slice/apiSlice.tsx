import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakerapi.it' }),
  endpoints: builder => ({
    getData: builder.query({
      query: (quantity) => `/api/v2/books?_quantity=${quantity}`
    }),
  })
})

export const { useGetDataQuery } = apiSlice;