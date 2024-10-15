import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AuthSlice } from "./auth";
import { UtilsSlice } from "./utils";


export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    utils: UtilsSlice.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
