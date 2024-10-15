import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UtilsSliceState {
  statusBarColor: StatusBarColor
 
}

const initialState: UtilsSliceState = {
    statusBarColor: "auto"
};


export const UtilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    // toggleStatusBarColor: (
    //   state:  UtilsSliceState,
    //   action: PayloadAction<StatusBarColor>
    // ) => {
    //     state.statusBarColor = action.payload === "auto" 
    //     ? state.statusBarColor === "light" 
    //       ? "dark" 
    //       : "light"
    //     : action.payload;
        
    // },
  
  },
});

export default UtilsSlice.reducer;

export const {
    // toggleStatusBarColor
} = UtilsSlice.actions;
