import axios from "axios";
import { API_URL } from "./constant";

const axiosInstance = axios.create({
  baseURL: API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional
});

// ✅ Simple error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
