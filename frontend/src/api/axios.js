import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});


axiosInstance.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;