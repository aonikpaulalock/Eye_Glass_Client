import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mainBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include"
})


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: mainBaseQuery,
  endpoints: () => ({}),
})