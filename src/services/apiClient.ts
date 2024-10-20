import axios, { AxiosResponse } from "axios";

export interface ErrorDetail {
  code: string;
  target: string;
  description: string;
}

export interface ApiError {
  apiErrorCode: string;
  message: string;
  errorDetails: ErrorDetail[];
}

const apiVersion = "v1";

const rootApiPath = `api/${apiVersion}`;

export const apiEndpoints = {
  authenticate: "auth/authenticate",
  register: "auth/register",
  user: "current-user",
  climbs: "climbs",
  boulderGrades: "boulder-grades",
  dangers: "dangers",
  grades: "grades",
  styles: "styles",
};

export const getApiError = (response: AxiosResponse): ApiError => {
  if (response?.data) {
    const { apiErrorCode, message, errorDetails } = response.data;
    return {
      apiErrorCode,
      message,
      errorDetails: errorDetails || [],
    };
  }
  return {
    apiErrorCode: "UNKNOWN_ERROR",
    message: "An unknown error occurred. Please try again later.",
    errorDetails: [],
  };
};

const apiClient = axios.create({
  baseURL: `http://localhost:8085/${rootApiPath}/`,
});

export default apiClient;
