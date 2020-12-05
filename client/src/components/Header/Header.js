import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton.js";
import laundrLogo from "./../../assets/laundrLogo.png";

const Header = (props) => {
  return (
    <div className="topnav">
      <Link id="logo-link" to="/">
        <img className="topnav-logo" src={laundrLogo} alt="Laundr logo" />
      </Link>
      <div className="topnav-right align">
        <ShoppingCartButton
<<<<<<< HEAD
            style={{ top: "50", left: "0" }}
            itemsInCart={props.itemsInCart}
            onAddToCartClick={props.handleAddToCartClick}
            onRemoveFromCartClick={props.handleRemoveFromCartClick}
          />
        {props.currentUser ?
          (
              <span>
                  <Link className ="topnav-link" to='/History'>History</Link>
                  <Link className ="topnav-link" to='/Logout'>Log Out</Link>
              </span>
          ) :
          (
          <span>
              <Link className ="topnav-link" to="/Login">Log In</Link>
              <Link className ="topnav-link" to="/Signup">Sign Up</Link>
          </span>
          )
        }
=======
          style={{ top: "50", left: "0" }}
          itemsInCart={props.itemsInCart}
          onAddToCartClick={props.handleAddToCartClick}
          onRemoveFromCartClick={props.handleRemoveFromCartClick}
        />
>>>>>>> 55bb31faa40e3a69db0869b5317ad9c0b6d86615
      </div>
    </div>
  );
};

export default Header;
