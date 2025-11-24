import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import "../Styles/Component/Cart.scss";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              
              <img src={item.image} alt={item.title} />

              <div className="info">
                <h4>{item.title}</h4>
                <p className="price">${item.price}</p>
              </div>

              <button className="remove" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Cart;
