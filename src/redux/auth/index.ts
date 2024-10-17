import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { verifyTokenAndlogin } from "./features";

interface AuthSliceState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user: User;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: {},
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  // redux http auto reducers
  extraReducers: (builder) => {
    builder
      .addCase(verifyTokenAndlogin.pending, (state: AuthSliceState) => {
        state.isAuthenticating = true;
      })
      .addCase(
        verifyTokenAndlogin.fulfilled,
        (state: AuthSliceState, action: PayloadAction<any>) => {
          state.isAuthenticated = true;
          state.user = action.payload;
        }
      )
      .addCase(verifyTokenAndlogin.rejected, (state: AuthSliceState) => {
        state.isAuthenticated = false;
        state.isAuthenticating = false;
        state.user = {};
      });
  },
});

export default AuthSlice.reducer;

export const {} = AuthSlice.actions;
