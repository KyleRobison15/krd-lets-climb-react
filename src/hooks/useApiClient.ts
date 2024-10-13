import axios, { AxiosResponse } from "axios";
import useLoading from "./useLoading";

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

const useApiClient = () => {
  const { setLoading } = useLoading();

  const apiEndpoints = {
    authenticate: "auth/authenticate",
    register: "auth/register",
    user: "current-user",
    climbs: "climbs",
    boulderGrades: "boulder-grades",
    dangers: "dangers",
    grades: "grades",
    styles: "styles",
  };

  const getApiError = (response: AxiosResponse): ApiError => {
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

  const baseApiClient = axios.create({
    baseURL: `http://localhost:8085/${rootApiPath}/`,
  });

  const apiClient = baseApiClient;

  // Request interceptor to show loading spinner
  apiClient.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Response interceptor to hide loading spinner
  apiClient.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  return {baseApiClient, apiClient, apiEndpoints, getApiError};
};

export default useApiClient;
