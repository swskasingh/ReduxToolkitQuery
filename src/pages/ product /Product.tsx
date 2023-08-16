import { Key } from "react";
import Card from "../../components/card";
import { useGetAllProductsQuery } from "../../service/product";

interface IProduct {
  price: number;
  category: string;
  description: string;
  title: string;
  image: string;
  id: Key | null | undefined;
  // Define your product interface here
}

const Product = () => {
  const { data } = useGetAllProductsQuery();
  if (!data) {
    return null; // Handle loading or empty state
  }

  return (
    <div className="grid grid-cols-3">
      {data.products.map((product: IProduct) => (
        <div key={product.id}>
          <Card
            image={product.image}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Product;
