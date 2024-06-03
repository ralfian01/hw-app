import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  showTabs: boolean;
  path: string;
  pathPaket: string;
}

const initialState: UIState = {
  showTabs: true,
  path: "home",
  pathPaket: "prewedding"
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
    }
  }
});

export const { setShowTabs, setPath, setPathPaket } = uiSlice.actions;
export default uiSlice.reducer;
