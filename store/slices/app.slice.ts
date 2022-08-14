import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../index";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface App {
  loaded: boolean;
}

// Initial state
const initialState: App = {
  loaded: false,
};

// Actual Slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAppState(state, action) {
      state.loaded = action.payload;
    },
  },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: PayloadAction<any,any>) => {
        return {
          ...state,
          ...action.payload.app,
        }
      }).addCase("LOAD_COMPLETE",(state,action: PayloadAction<boolean,any>) => {
        console.log("App loaded");
        return {
          ...state,
          loaded: action.payload
        }
      })
  }
});

export const { setAppState } = appSlice.actions;

export const selectAuthState = (state: AppState) => state.app;

export default appSlice.reducer;