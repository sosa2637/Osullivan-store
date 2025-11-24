import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Component/AllProducts.scss";

import Filter from "../Components/Filter";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  // Tri des produits
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="all-products">
      <h1>All Products</h1>

      {/* Sélecteur de tri */}
      <div className="sort-section">
        <select onChange={(e) => setSortOrder(e.target.value)} >
          <option value="">Sort by price</option>
          <option value="desc">Price: Low → High</option>
          <option value="asc">Price: High → Low</option>
        </select>
      </div>

      {/* Affichage des produits */}
      <div className="products-grid">
        {sortedProducts.map(product => (
          <Filter key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
