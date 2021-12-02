import axios from "axios";

import { API_URL } from "../utils/config";

export const registerService = async (data) => {
  const response = await axios.post(`${API_URL}/api/register`, data);
  return response.data.data;
};
