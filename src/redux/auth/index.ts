import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { verifyTokenAndlogin } from "./features";

interface AuthSliceState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  token: string;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isAuthenticating: false,
  token: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setIsGettingTokenFromGoogleCallback: (
    //   state: AuthSliceState,
    //   action: PayloadAction<boolean>
    // ) => {
    //   state.isGettingTokenFromGoogleCallback = action.payload;
    // },
    // getTokenFromGoogleFulfiled: (
    //   state: AuthSliceState,
    //   action: PayloadAction<string>
    // ) => {
    //   state.token = action.payload;
    //   state.isAuthenticated = true;
    // },
  },

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
          // state.token = action.payload.token;
          // state.isAuthenticating = false;
        }
      )
      .addCase(verifyTokenAndlogin.rejected, (state: AuthSliceState) => {
        state.isAuthenticated = false;
        state.isAuthenticating = false;
        state.token = "";
      });
  },
});

export default AuthSlice.reducer;

export const {
  // setIsGettingTokenFromGoogleCallback,
  // getTokenFromGoogleFulfiled,
} = AuthSlice.actions;
