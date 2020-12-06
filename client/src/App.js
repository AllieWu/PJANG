import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import History from "./views/History/History";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header.js";
import items from "./views/Product/productinfo.json";
<<<<<<< HEAD
=======
import LogIn from "./views/Authentication/LogIn.js";
import SignUp from "./views/Authentication/SignUp";
import LogOut from "./views/Authentication/LogOut";
import httpUser from "./httpUser";

import "./App.css";
>>>>>>> master

const App = () => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());
  console.log(currentUser);

  const onLoginSuccess = () => {
    setCurrentUser(httpUser.getCurrentUser());
  };

  const logOut = () => {
    httpUser.logOut();
    setCurrentUser(null);
  };

  const [itemsInCart, setItemsInCart] = useState([]);
  const [page, setPage] = useState([{}]);

  const handleAddToCartClick = (name) => {
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
            quantity: item.quantity + 1,
          };
        });
      }

      // otherwise, add new item to cart
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
        <Route
          path="/History"
          render={() => {
            return currentUser ? <History /> : <History to="/login" />;
          }}
        />
        <Route
          path="/Login"
          render={(props) => {
            return <LogIn {...props} onLoginSuccess={onLoginSuccess} />;
          }}
        />
        <Route
          path="/Signup"
          render={(props) => {
            return <SignUp {...props} onSignUpSuccess={onLoginSuccess} />;
          }}
        />
        <Route
          path="/Logout"
          render={(props) => {
            return <LogOut onLogOut={logOut} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
