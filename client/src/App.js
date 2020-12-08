import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import History from "./views/History/History";
import NotFound from "./views/NotFound";
<<<<<<< HEAD
=======
import items from "./views/Product/productinfo.json";
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

import LogIn from "./views/Authentication/LogIn.js";
import SignUp from "./views/Authentication/SignUp";
import LogOut from "./views/Authentication/LogOut";
<<<<<<< HEAD
import httpUser from "./httpUser";
import axios from "axios";
=======
import httpUser from './httpUser';
import axios from 'axios';
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());
  console.log(currentUser);

  const [productInfo, setProductInfo] = useState([]);
  console.log(productInfo);

  const [priceInfo, setPriceInfo] = useState([]);
  console.log(priceInfo);

  //??? how to prevent render on each set
  //only runs when component mounts; get productInfo and priceInfo only once
  useEffect(async () => {
<<<<<<< HEAD
    const products = await axios.get("/api/product/retrieve-products");
    const prices = await axios.get("/api/product/retrieve-prices");
    setProductInfo(products.data.products);
    setPriceInfo(prices.data.prices);
  }, []);
=======
    const products = await axios.get('/api/product/retrieve-products');
    const prices = await axios.get('/api/product/retrieve-prices');
    setProductInfo(products.data.products);
    setPriceInfo(prices.data.prices);
  },[])
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

  const onLoginSuccess = () => {
    setCurrentUser(httpUser.getCurrentUser());
  };

  const logOut = () => {
    httpUser.logOut();
    setCurrentUser(null);
  };

  const [itemsInCart, setItemsInCart] = useState([]);
<<<<<<< HEAD
  console.log(itemsInCart);

  const handleAddToCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);
=======
  const [page, setPage] = useState([{}]);

  const handleAddToCartClick = (name) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find(
        (item) => item.price_data.product_data.name === name
      );
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
<<<<<<< HEAD
          if (item.id !== id) return item;

          return {
            id: item.id,
=======
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
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
            quantity: item.quantity + 1,
          };
        });
      }

      // otherwise, add new item to cart
<<<<<<< HEAD
      const item = productInfo.find((item) => item.metadata.priceID === id);
      if (item !== undefined) {
        return [
          ...itemsInCart,
          {
            id: item.metadata.priceID,
            quantity: 1,
          },
        ];
      } else {
        console.log("Cannot find metadata for item with id: ", id);
        return itemsInCart;
      }
    });
  };

  const handleRemoveFromCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);
=======
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
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
<<<<<<< HEAD
          if (item.id !== id) return item;

          return {
            id: item.id,
=======
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
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
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
                currentUser={currentUser}
<<<<<<< HEAD
                products={productInfo}
=======
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
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
<<<<<<< HEAD
=======
                page={page}
                setPage={setPage}
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
                itemsInCart={itemsInCart}
                handleAddToCartClick={handleAddToCartClick}
                handleRemoveFromCartClick={handleRemoveFromCartClick}
                currentUser={currentUser}
<<<<<<< HEAD
                products={productInfo}
=======
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
              />
            );
          }}
        />

        <Route
          path="/History"
          render={(props) => {
            return currentUser ? (
              <History {...props} currentUser={currentUser} />
            ) : (
              <History to="/login" />
            );
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
