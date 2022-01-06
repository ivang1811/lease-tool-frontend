import axios from "axios";

import { API_URL } from "../utils/config";

export const addLeaseAgreement = async (data) => {
  const response = await axios.post(`${API_URL}/api/add-lease`, data);
  return response.data.data;
};

export const getLease = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/search-lease-by-property`,
    data
  );
  return response.data.data;
};

export const upload = async (file) => {
  const response = await axios.post(`${API_URL}/api/upload`, {
    data: file.file,
    headers: {
      "x-device-id": "stuff",
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.signed_url;
};

export const getLeaseByLandlord = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/search-lease-by-landlordid`,
    data
  );
  return response.data.data;
};

export const getLeaseByTenant = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/search-lease-by-tenant`,
    data
  );
  return response.data.data;
};

export const getLeaseByid = async (data) => {
  const response = await axios.post(`${API_URL}/api/search-lease-by-id`, data);
  return response.data.data;
};

export const updateLease = async (data) => {
  const response = await axios.post(`${API_URL}/api/update-lease`, data);
  return response.data.data;
};
