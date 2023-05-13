import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  authToken: string | null;
  email: string | null;
  name: string | null;
}

const initialState: authState = {
  authToken: null,
  email: null,
  name: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state = { ...state, ...(action.payload as authState) };
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;