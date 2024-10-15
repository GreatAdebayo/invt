import { AxiosError } from "axios";
import { ERROR_OCCURED_MESSAGE } from "../constants";

export const handleAxiosError = (error: any): never => {
  if (error instanceof AxiosError) {
    const errorMessage = error.response?.data.message || ERROR_OCCURED_MESSAGE;
    throw new Error(errorMessage);
  }
  throw error;
};
