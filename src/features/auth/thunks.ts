import { createAsyncThunk } from "@reduxjs/toolkit";

import { authUserLogin, authUserLogout } from "@services/auth.services";

export const loginUser = createAsyncThunk<any, any>(
  "auth/loginUser",
  async (dataLogin: object, { rejectWithValue }) => {
    try {
      const response = await authUserLogin(dataLogin);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      return response;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const logoutUser = createAsyncThunk<any, any>(
  "auth/logoutUser",
  async (token: string) => {
    try {
      const response = await authUserLogout(token);
      if (response.status === true) {
        localStorage.removeItem("token");
      }
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }
);
