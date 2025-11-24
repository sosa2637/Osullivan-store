import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  // Récupère toutes les catégories
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Charge les produits quand une catégorie est sélectionnée
  useEffect(() => {
    if (!selectedCategory) return;

    axios
      .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <div className="categories-page">
      <h1>Osullivan Online Store</h1>

      {/* FILTRE PAR CATÉGORIES */}
      <div className="boutons">
        <ul>
          {categories.map((c) => (
            <li key={c}>
              <input
                type="radio"
                id={c}
                name="categories"
                value={c}
                onChange={(e) => setSelectedCategory(e.target.value)}
                checked={selectedCategory === c}
              />
              <label htmlFor={c}>{c}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* LISTE DES PRODUITS */}
      <div className="products-list">
        {selectedCategory ? (
          allProducts.length > 0 ? (
            allProducts.map((product) => (
              <Filter key={product.id} product={product} />
            ))
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <h2>Please select a category</h2>
        )}
      </div>
    </div>
  );
}

export default Categories;
