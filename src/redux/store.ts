import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AuthSlice } from "./auth";
import { AlertsSlice } from "./alert";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    alerts: AlertsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
