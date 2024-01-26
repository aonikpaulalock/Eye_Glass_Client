import { baseApi } from "../api/baseApi"

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-user",
          method: "POST",
          body: data
        }
      }
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/users/login-user",
          method: "POST",
          body: data
        }
      }
    }),
  })
})

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;