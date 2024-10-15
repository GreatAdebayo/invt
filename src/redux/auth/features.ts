import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "utils/axios/api";
import { handleAxiosError } from "utils/helper/errorHandler";

// Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.post("auth/login", { email, password });
      const { loginResponse } = response.data;
      return loginResponse;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Signup
export const signUp = createAsyncThunk(
  "auth/register",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.post("auth/register", { email, password });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Resend Magic link
export const resendMagicLink = createAsyncThunk(
  "user/resentLink",
  async (email: string) => {
    try {
      const response = await api.post("user/resentLink", { email });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Verify Token
export const verifyToken = createAsyncThunk(
  "user/verifyToken",
  async (token: string) => {
    try {
      const response = await api.get(`user/verify/${token}`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Forgot password
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email: string) => {
    try {
      const response = await api.post("user/forgotPassword", { email });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);
