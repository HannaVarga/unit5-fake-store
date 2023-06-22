import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import Category from "../../components/Category/Category";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Home() {
  const { products, setProducts } = useContext(ShopContext);

  return (
    <div className="home-container">
      <div className="category-container">
        <Category setProducts={setProducts} />
      </div>

      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
