import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../Styles/Component/Navbar.scss";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  // Sécurisation pour éviter les erreurs
  const itemsCount = Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <nav className="navbar">
      <div className="logo">Osullivan Store</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/products" activeclassname="active">Products</NavLink>
        </li>

        <li>
          <NavLink to="/categories" activeclassname="active">Categories</NavLink>
        </li>

        <li>
          <NavLink to="/cart" activeclassname="active">
            Cart ({itemsCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
