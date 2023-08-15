import React from "react";
import { useFetchProductsQuery } from "../../service/ product /api.ts"; // Adjust the import path
import CardComponent from "../../components/card"; // Adjust the import path and component casing
import { api } from "../../service/ product /api";

const ProductPage: React.FC = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || "An error occurred"}</div>;
  }

  return (
    <div className="product-page">
      {products.map((product) => (
        <CardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
