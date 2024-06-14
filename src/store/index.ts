import { authReducer } from "@features/auth";
import uiReducer from "@features/ui/uiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,

    // show tabs
    ui: uiReducer
  }
});
