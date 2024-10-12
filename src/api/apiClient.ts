import axios from "axios";

const apiVersion = "v1";

const rootApiPath = `api/${apiVersion}`;

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

const apiClient = axios.create({
  baseURL: `http://localhost:8085/${rootApiPath}/`,
});


export default apiClient;
