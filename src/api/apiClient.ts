import axios from "axios";

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

export default axios.create({
  baseURL: `http://localhost:8085/${rootApiPath}/`,
});
