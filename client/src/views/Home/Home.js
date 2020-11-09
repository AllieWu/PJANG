import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import "./Home.css";
import items from "./../Product/productinfo.json";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Link to="/Product/watermelon-cucumber">Watermelon Cucumber</Link>
        <header className="App-header">
          {items.map((item) => (
            <div
              id="example-product"
              style={{ display: "inline-block", width: "450px" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  height: "auto",
                  width: "250px",
                }}
              >
                Purchase {item.name}
              </p>
              <AddToCartButton
                style={{ width: "200px" }}
                quantity={
                  this.props.itemsInCart.find((i) => i.name === item.name)
                    ?.quantity ?? 0
                } // try to find the existing count in our shopping cart before assuming count = 0
                name={item.name}
                onAddToCartClick={this.props.handleAddToCartClick}
                onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
              />
            </div>
          ))}
        </header>
      </div>
    );
  }
}
