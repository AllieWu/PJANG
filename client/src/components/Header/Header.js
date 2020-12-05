import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton.js";
import laundrLogo from "./../../assets/laundrLogo.png";
import blueLaundrLogo from "./../../assets/blueCombine.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  routeChange(path) {
    window.location.pathname = path;
  }

  render() {
    return (
      <div className="topnav">
        <Link id="logo-link" to="/">
          <img
            className="topnav-logo"
            src={this.props.page === "home" ? laundrLogo : blueLaundrLogo}
            alt="Laundr Logo"
          />
        </Link>
        <div className="topnav-right align">
          {this.props.currentUser ? (
            <div>
              <button onMouseDown={this.routeChange.bind(this, "/History")}>
                History
              </button>
              <button onMouseDown={this.routeChange.bind(this, "/Logout")}>
                Log Out
              </button>
              <ShoppingCartButton
                style={{ top: "50", left: "0" }}
                itemsInCart={this.props.itemsInCart}
                onAddToCartClick={this.props.handleAddToCartClick}
                onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
              />
            </div>
          ) : (
            <div>
              <button onMouseDown={this.routeChange.bind(this, "/Login")}>
                Log In
              </button>
              <button onMouseDown={this.routeChange.bind(this, "/Signup")}>
                Sign Up
              </button>
              <ShoppingCartButton
                style={{ top: "50", left: "0" }}
                itemsInCart={this.props.itemsInCart}
                onAddToCartClick={this.props.handleAddToCartClick}
                onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
