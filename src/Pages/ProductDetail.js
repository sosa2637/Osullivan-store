import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../Styles/Component/ProductDetail.scss';
import { CartContext } from '../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Erreur lors du chargement du produit :", err));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div className="product-detail">
      <h1>Détail du produit</h1>
      <div className="detail-card">
        <img src={product.image} alt={product.title} />
        <div className="info">
          <h2>{product.title}</h2>
          <p className="price">{product.price} $</p>
          <p className="description">{product.description}</p>
          <p className="category">Catégorie : {product.category}</p>
          <button onClick={() => {
            addToCart(product);
            alert('Product added to cart');
          }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
