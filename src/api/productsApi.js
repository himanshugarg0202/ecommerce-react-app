import axiosClient from "./axiosClient";

export const fetchProducts = async () => {
  const response = await axiosClient.get("/products");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axiosClient.get(`/products/${id}`);
  return response.data;
};
