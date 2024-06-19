import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

interface UIState {
  showTabs: boolean;
  path: string;
  pathPaket: string;
  data?: any;
  toast?: boolean;
}

const initialState: UIState = {
  showTabs: true,
  path: "home",
  pathPaket: "prewedding",
  data: data,
  toast: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowTabs: (state, action) => {
      state.showTabs = action.payload;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    },
    setPathPaket: (state, action) => {
      state.pathPaket = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setToast: (state, action) => {
      state.toast = action.payload;
    }
  }
});

export const { setShowTabs, setPath, setPathPaket, setData, setToast } =
  uiSlice.actions;
export default uiSlice.reducer;
