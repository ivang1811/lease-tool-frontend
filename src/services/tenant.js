import axios from "axios";

import { API_URL } from "../utils/config";

export const addnewTenant = async (data) => {
  const response = await axios.post(`${API_URL}/api/addtenant`, data);
  return response.data.data;
};

export const getTenantPost = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/search-tenant-by-landlord`,
    data
  );
  return response.data.data;
};

export const getTenantPostById = async (data) => {
  const response = await axios.post(`${API_URL}/api/search-tenant-by-id`, data);
  return response.data.data;
};

export const updateTenant = async (data) => {
  const response = await axios.post(`${API_URL}/api/updatetenant`, data);
  return response.data.data;
};
