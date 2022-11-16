import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { SingleSpell } from "../api/apiTypes";

// Type for our state
export interface SavedState {
  savedState: SingleSpell[];
}

// Initial state
const initialState: SavedState = {
  savedState: [],
};

// Actual Slice
export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    // Action to set the authentication status
    addToSaved(state: SavedState, action: { payload: SingleSpell }) {
      if (state.savedState.find((spell) => spell._id === action.payload._id)) {
        return { savedState: [...state.savedState] };
      } else {
        return { savedState: [...state.savedState, action.payload] };
      }
    },
    removeFromSaved(state: SavedState, action: { payload: SingleSpell }) {
      return {
        savedState: state.savedState.filter((savedSpell) => {
          savedSpell._id !== action.payload._id;
        }),
      };
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { addToSaved, removeFromSaved } = savedSlice.actions;

export const selectSavedState = (state: AppState) => state.saved.savedState;

export default savedSlice.reducer;
