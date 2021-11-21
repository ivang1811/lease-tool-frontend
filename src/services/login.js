import axios from "axios";

import { API_URL } from "../utils/config";

export const loginService = async (data) => {
  const response = await axios.post(`${API_URL}/api/login`, data);
  return response.data;
};
