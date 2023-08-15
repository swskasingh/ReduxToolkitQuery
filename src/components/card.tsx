// components/CardComponent.tsx
import React from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

interface CardProps {
  product: Product;
}

const CardComponent: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default CardComponent;
