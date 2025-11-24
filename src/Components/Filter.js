import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Filter = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  if (!product) return null;

  const inCart = cartItems && cartItems.some(i => i.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">{product.price} $</p>
      <div className="card-actions">
        <Link to={`/products/${product.id}`} className="details-link">
          View product
        </Link>

        <button
          className="add"
          onClick={() => addToCart(product)}
          disabled={inCart}
        >
          {inCart ? "In cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Filter;
