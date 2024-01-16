import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8085/api/v1",
});

export const apiEndpoints = {
  authenticate: "/auth/authenticate",
  register: "/auth/register",
  user: "/current-user",
  climbs: "/climbs",
  boulderGrades: "/boulder-grades",
  dangers: "/dangers",
  grades: "/grades",
  styles: "/styles",
};
