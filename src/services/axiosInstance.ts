import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "*",
  },
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default axiosInstance;
