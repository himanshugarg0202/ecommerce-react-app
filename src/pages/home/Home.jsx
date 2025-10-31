import ProductList from '../productList/ProductList';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Welcome to My E-Commerce Website 🛍️</h1>
      <ProductList />
    </div>
  );
};

export default Home;
