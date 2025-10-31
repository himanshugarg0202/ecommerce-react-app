import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <img src={product.image} alt={product.title} height={150} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
