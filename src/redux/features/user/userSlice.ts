import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export type TUser = {
  name: string
  email: string
  iat: number
  exp: number
}

type TAuthState = {
  user: null | TUser;
  token: null | string
}

const initialState: TAuthState = {
  user: null,
  token: null
}

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      state.user = user;
      state.token = token
    },

    logout: (state) => {
      state.user = null;
      state.token = null
    }
  }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer

export const selectUser = (state: RootState) => state.user.user
export const selectToken = (state: RootState) => state.user.token