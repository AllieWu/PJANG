import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton.js";
import "./Home.css";
import items from "./../Product/productinfo.json";


function Home() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const handleAddToCartClick = (name) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.name === name);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.name !== name) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = items.find((item) => item.name === name);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCartClick = (name) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.name === name);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.name !== name) return item;
          return { ...itemInCart, quantity: item.quantity - 1 };
        });
      }
    });
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + 15.99 * item.quantity,
    0
  );

  console.log("Home");
  console.log(itemsInCart);

  return (
    <div className="App">
      <Link to="/Product/watermelon-cucumber">Watermelon Cucumber</Link>
      <header className="App-header">
        <ShoppingCartButton
          cart={itemsInCart}
          onAddToCartClick={(name) => handleAddToCartClick(name)}
          onRemoveFromCartClick={(name) => handleRemoveFromCartClick(name)}
        />
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
                itemsInCart.find((i) => i.name == item.name)?.quantity ?? 0
              } // try to find the existing count in our shopping cart before assuming count = -
              name={item.name}
              onAddToCartClick={() => handleAddToCartClick(item.name)}
              onRemoveFromCartClick={() => handleRemoveFromCartClick(item.name)}
            />
          </div>
        ))}
        <p>Total Cost: {totalCost}</p>
      </header>
    </div>
  );
}

export default Home;
