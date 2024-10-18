import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api/axios";
import { handleAxiosError } from "../../utils/api/errorHandler";

// Verify Token and Login
export const verifyTokenAndlogin = createAsyncThunk(
  "auth/signin",
  async ({ token }: VerifyToken) => {
    try {
      const response = await api.post("auth/signin", { token });
      const { data } = response.data;
      return data;
    } catch (error: any) {
      handleAxiosError(error);
    }
  }
);
