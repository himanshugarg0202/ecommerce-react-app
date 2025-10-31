import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com", // example API
});

export default axiosClient;
