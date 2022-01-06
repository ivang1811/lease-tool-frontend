import axios from "axios";

import { API_URL } from "../utils/config";

export const addPropertyService = async (data) => {
  const response = await axios.post(`${API_URL}/api/addproperty`, data);
  return response.data.data;
};

export const getPropertyPost = async (data) => {
  const response = await axios.post(
    `${API_URL}/searchpropertybylandlord`,
    data
  );
  return response.data.data;
};

export const getPropertyPostById = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/search-property-by-id`,
    data
  );
  return response.data.data;
};

export const updateProperty = async (data) => {
  const response = await axios.post(`${API_URL}/api/updateproperty`, data);
  return response.data.data;
};
