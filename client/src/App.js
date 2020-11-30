import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header.js";
import items from "./views/Product/productinfo.json";
import "./App.css";

const App = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [page, setPage] = useState([{}]);

  const handleAddToCartClick = (name) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find(
        (item) => item.price_data.product_data.name === name
      );

      // if item is already in cart, update the quantity
      if (itemInCart) {
        console.log("updating item with name " + name);

        return itemsInCart.map((item) => {
          if (item.price_data.product_data.name !== name) return item;

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.price_data.product_data.name,
                images: item.price_data.product_data.images,
              },
              unit_amount: 1899,
            },
            quantity: item.quantity + 1,
          };
          //return { ...itemInCart, quantity: item.price_data.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      console.log("adding new item with name " + name);
      const item = items.find((item) => item.name === name);
      return [
        ...itemsInCart,
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: item.images,
            },
            unit_amount: 1899,
          },
          quantity: 1,
        },
      ];
      //return [...itemsInCart, { ...item, quantity: 1 }];
    });

    itemsInCart.forEach((e) => console.log(e));
  };

  const handleRemoveFromCartClick = (name) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find(
        (item) => item.price_data.product_data.name === name
      );

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.price_data.product_data.name !== name) return item;

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.price_data.product_data.name,
                images: item.price_data.product_data.images,
              },
              unit_amount: 1899,
            },
            quantity: item.quantity - 1,
          };
        });
      }
    });
  };

  return (
    <div>
      <Header
        itemsInCart={itemsInCart}
        handleAddToCartClick={handleAddToCartClick}
        handleRemoveFromCartClick={handleRemoveFromCartClick}
      />
      <Switch>
        <Route
          exact
          path="/Home"
          render={() => {
            return (
              <Home
                itemsInCart={itemsInCart}
                handleAddToCartClick={handleAddToCartClick}
                handleRemoveFromCartClick={handleRemoveFromCartClick}
              />
            );
          }}
        />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route
          path="/product/:pageNumber"
          render={(props) => {
            return (
              <Product
                {...props}
                page={page}
                setPage={setPage}
                itemsInCart={itemsInCart}
                handleAddToCartClick={handleAddToCartClick}
                handleRemoveFromCartClick={handleRemoveFromCartClick}
              />
            );
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
