import { useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/productsApi";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductList.css'

const ProductList = () => {
  const { setProducts, products } = useProductStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    onSuccess: (data) => setProducts(data),
  });

   useEffect(() => {
    if (data) setProducts(data);
  }, [data, setProducts]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
