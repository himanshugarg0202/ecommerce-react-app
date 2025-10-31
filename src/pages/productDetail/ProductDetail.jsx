import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../api/productsApi";
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load product.</p>;

  return (
    <div className="product-detail">
      <img src={data.image} alt={data.title} width={200} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>${data.price}</h3>
    </div>
  );
};

export default ProductDetail;
