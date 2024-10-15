import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   forgotPassword,
//   login,
//   resendMagicLink,
//   signUp,
//   verifyToken,
// } from "./features";


interface AuthSliceState {
  isAuthenticated: boolean;
 
}
const initialState: AuthSliceState = {
  isAuthenticated: false,
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
      // .addCase(login.pending, (state: AuthSliceState) => {
      //   state.isLoading = true;
      // })
      // // login
      // .addCase(
      //   login.fulfilled,
      //   (state: AuthSliceState, action: PayloadAction<User>) => {
      //     state.isAuthenticated = true;
      //     state.token = action.payload.token;
      //     state.isLoading = false;
      //     state.user = { ...state.user, email: action.payload.email };
      //   }
      // )
      // .addCase(login.rejected, (state: AuthSliceState) => {
      //   state.isAuthenticated = false;
      //   state.isLoading = false;
      //   state.token = "";
      // })
      // //signup
      // .addCase(signUp.pending, (state: AuthSliceState) => {
      //   state.isLoading = true;
      // })
      // .addCase(
      //   signUp.fulfilled,
      //   (state: AuthSliceState, action: PayloadAction<User>) => {
      //     state.user = action.payload;
      //     state.isLoading = false;
      //   }
      // )
      // .addCase(signUp.rejected, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // // resend magic link
      // .addCase(resendMagicLink.pending, (state: AuthSliceState) => {
      //   state.isLoading = true;
      // })
      // .addCase(resendMagicLink.fulfilled, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // .addCase(resendMagicLink.rejected, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // // verify token
      // .addCase(verifyToken.pending, (state: AuthSliceState) => {
      //   state.isLoading = true;
      // })
      // .addCase(verifyToken.fulfilled, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // .addCase(verifyToken.rejected, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // // forgot password
      // .addCase(forgotPassword.pending, (state: AuthSliceState) => {
      //   state.isLoading = true;
      // })
      // .addCase(forgotPassword.fulfilled, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // })
      // .addCase(forgotPassword.rejected, (state: AuthSliceState) => {
      //   state.isLoading = false;
      // });
  },
});

export default AuthSlice.reducer;

export const {
  // setIsGettingTokenFromGoogleCallback,
  // getTokenFromGoogleFulfiled,
} = AuthSlice.actions;
