import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import LoginButton from "./../../components/Authentication/LoginButton.js";
import LogoutButton from "./../../components/Authentication/LogoutButton.js";
import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton.js";
import laundrLogo from "./../../assets/laundrLogo.png"

const Header = (props) => {
  return (
    <div className="topnav">
      {/* Logo */}
      <Link id="logo-link" to="/">
        <img
          className="topnav-logo"
          src={laundrLogo}
          alt="Laundr logo"
        />
      </Link>

      {/* Page Links */}
      <div className="topnav-right align">
        <Link className="topnav-link" to="/Register">
          Sign in
        </Link>
        <Link to="/History">
          History
        </Link>
        <LoginButton />
        <LogoutButton />
        <ShoppingCartButton
            style={{ top: "50", left: "0" }}
            itemsInCart={props.itemsInCart}
            onAddToCartClick={props.handleAddToCartClick}
            onRemoveFromCartClick={props.handleRemoveFromCartClick}
          />
      </div>
      
    </div>
  );
};

export default Header;
