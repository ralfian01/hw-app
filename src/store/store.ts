import { authReducer } from "@features/auth";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
