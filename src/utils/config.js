export const REDIRECT_URL =
  process.env.NODE_ENV === "production"
    ? "https://sk-tunnel-dashboard.ilg.arup.com/"
    : "http://localhost:3000/";

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://sk-dashboard-api.ilg.arup.com"
    : "http://localhost:5000";
