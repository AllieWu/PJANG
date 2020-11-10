import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import NotFound from "./views/NotFound";
import items from "./views/Product/productinfo.json";

const App = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [page, setPage] = useState([{}]);

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

  return (
    <div>
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
          path="/Product/:pageNumber"
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
