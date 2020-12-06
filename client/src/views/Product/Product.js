import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pages from "./productinfo.json";

import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import Header from "./../../components/Header/Header.js";

const Product = (props) => {
  useEffect(() => {
    switch (props.match.params.pageNumber) {
      case "watermelon-cucumber":
      default:
        props.setPage(pages[0]);
        break;
      case "white-gardenia":
        props.setPage(pages[1]);
        break;
      case "mahogany-teakwood":
        props.setPage(pages[2]);
        break;
      case "fresh-air":
        props.setPage(pages[3]);
        break;
      case "coffee-vanilla":
        props.setPage(pages[4]);
        break;
      case "eucalyptus-tea-tree":
        props.setPage(pages[5]);
        break;
    }
  });

  return (
    <div>
      <Header
        itemsInCart={props.itemsInCart}
        handleAddToCartClick={props.handleAddToCartClick}
        handleRemoveFromCartClick={props.handleRemoveFromCartClick}
        page={"product"}
      />
      <div style={{ top: "15%" }}>
        <h1>{props.page.name}</h1>
        <h3>{props.page.desc1}</h3>
        <h3>{props.page.desc2}</h3>
        <h3>This fragrance has hints of:</h3>
        <ul>
          <li>{props.page.scent1}</li>
          <li>{props.page.scent2}</li>
          <li>{props.page.scent3}</li>
        </ul>
      </div>
      <AddToCartButton
        style={{ width: "20em" }}
        quantity={
          props.itemsInCart?.find(
            (i) => i.price_data.product_data.name === props.page.name
          )?.quantity ?? 0
        } // try to find the existing count in our shopping cart before assuming count = 0
        name={props.page.name}
        onAddToCartClick={props.handleAddToCartClick}
        onRemoveFromCartClick={props.handleRemoveFromCartClick}
      />
      <div>
        <h4>Products</h4>
        <ul>
          <li>
            <Link to="/product/watermelon-cucumber">Watermelon Cucumber</Link>
          </li>
          <li>
            <Link to="/product/white-gardenia">White Gardenia</Link>
          </li>
          <li>
            <Link to="/product/mahogany-teakwood">Mahogany Teakwood</Link>
          </li>
          <li>
            <Link to="/product/fresh-air">Fresh Air</Link>
          </li>
          <li>
            <Link to="/product/coffee-vanilla">Coffee Vanilla</Link>
          </li>
          <li>
            <Link to="/product/eucalyptus-tea-tree">Eucalyptus Tea Tree</Link>
          </li>
        </ul>
        <h4>Return Home</h4>
        <ul>
          <li>
            <Link to="/Home">Return home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
