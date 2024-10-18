import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Alert {
  id: string;
  message: string;
  type: "error" | "warning" | "success" | "info";
}

interface AlertsState {
  alert: Alert | null;
}

const initialState: AlertsState = {
  alert: null, // Start with no alert
};

export const AlertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Omit<Alert, "id">>) => {
      // Generate a unique ID using Math.random
      const id = Math.random().toString(36).substr(2, 9);

      // Set the alert with the generated ID
      state.alert = { id, ...action.payload };
    },
    removeAlert: (state) => {
      // Clear the alert by setting it to null
      state.alert = null;
    },
  },
});

export const { addAlert, removeAlert } = AlertsSlice.actions;
export default AlertsSlice.reducer;
