import apiClient from "../api/apiClient";
import useLoading from "./useLoading";

export const useApiClient = () => {
  const { setLoading } = useLoading();

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

  return apiClient;
}