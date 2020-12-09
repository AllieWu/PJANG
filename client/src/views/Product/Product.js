import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pages from "./productinfo.json";
import "./../../assets/style.css";

import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import Header from "./../../components/Header/Header.js";

import watermelonImg from "./../../assets/detergentImages/watermelonMockup.png";
import coffeeImg from "./../../assets/detergentImages/coffeeMockup.png";
import eucalyptusImg from "./../../assets/detergentImages/eucalyptusMockup.png";
import freshImg from "./../../assets/detergentImages/freshairMockup.png";
import gardeniaImg from "./../../assets/detergentImages/gardeniaMockup.png";
import mahoganyImg from "./../../assets/detergentImages/mahoganyMockup.png";
import watermelonBackground from "./../../assets/backgroundPatterns/watermelon_pattern.png";
import eucalyptusBackground from "./../../assets/backgroundPatterns/eucalyptus_pattern.png";
import gardeniaBackground from "./../../assets/backgroundPatterns/gardenia_pattern.png";
import freshBackground from "./../../assets/backgroundPatterns/freshair_pattern.png";
import coffeeBackground from "./../../assets/backgroundPatterns/vanilla_pattern.png";
import mahoganyBackground from "./../../assets/backgroundPatterns/mahogany_pattern.png";

let img, alt, back, next, nextPage;
const Product = (props) => {
  useEffect(() => {
    switch (props.match.params.pageNumber) {
      case "watermelon-cucumber":
        back = watermelonBackground;
        img = watermelonImg;
        alt = "watermelon";
        next = eucalyptusImg;
        nextPage = "/Product/eucalyptus-tea-tree";
        props.setPage(pages[0]);
        break;
      case "eucalyptus-tea-tree":
         back = eucalyptusBackground;
         img = eucalyptusImg;
         alt = "eucalyptus";
         next = gardeniaImg;
         nextPage = "/Product/white-gardenia";
         props.setPage(pages[5]);
         break;  
      case "white-gardenia":
        back = gardeniaBackground;
        img = gardeniaImg;
        alt = "gardenia";
        next = freshImg;
        nextPage = "/Product/fresh-air";
        props.setPage(pages[1]);
        break;
      case "fresh-air":
        back = freshBackground;
        img = freshImg;
        alt = "freshair";
        next = coffeeImg;
        nextPage = "/Product/coffee-vanilla";
        props.setPage(pages[3]);
        break;  
      case "coffee-vanilla":
        back = coffeeBackground;
        img = coffeeImg;
        alt = "coffee";
        next = mahoganyImg;
        nextPage = "/Product/mahogany-teakwood";
        props.setPage(pages[4]);
        break;
      case "mahogany-teakwood":
        back = mahoganyBackground;
        img = mahoganyImg;
        alt = "mahogany";
        next = watermelonImg;
        nextPage = "/Product/watermelon-cucumber";
        props.setPage(pages[2]);
        break;
    }
  });

  let text = (number) => (
    <div className="text">
      <h3>PLACEHOLDER {number}</h3>
      <h4 className="placeholder-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
        nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis,
        lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet justo
        augue nec tellus. Aenean eget semper arcu, eget elementum massa. Fusce
        ornare tellus sed mi hendrerit venenatis. Nullam vitae magna tempor nunc
        facilisis posuere vitae at dolor. Maecenas porttitor vestibulum ligula
        at dapibus. Sed at ultrices mi. Morbi dignissim dictum consectetur. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed erat sem, aliquet non egestas eu, cursus eget quam.
      </h4>
    </div>
  );

  return (
    <div>
      <Header
        itemsInCart={props.itemsInCart}
        handleAddToCartClick={props.handleAddToCartClick}
        handleRemoveFromCartClick={props.handleRemoveFromCartClick}
        page={"product"}
        currentUser={props.currentUser}
      />
      <div style={{ top: "15%" }}>
        <div className={alt + "Background1"}></div>
        <div className={alt + "Background2"}></div>
        <div className={alt + "Background3"}></div>
        <div className={alt + "Background4"}></div>
        <div className={alt + "Background5"}></div>
        <h1 className={alt + "Title"}>{props.page.name2}</h1>
        <img
          src={img}
          alt={props.page.name + " Image"}
          className="productpImage"
        ></img>
        <h1 className={alt + "Title bottomTitle"}>{props.page.name3}</h1>

        <div
          className="autoscale"
          style={{ marginLeft: "250px", top: "-600px", position: "relative" }}
        >
          <h1 className="title">{props.page.name + " Laundr Bombs"}</h1>
          <h2>{props.page.desc1}</h2>
          <h2>{props.page.desc2}</h2>
          <h3>This fragrance has hints of:</h3>
          <ul style={{ marginLeft: "5%" }}>
            <li>{props.page.scent1}</li>
            <li>{props.page.scent2}</li>
            <li>{props.page.scent3}</li>
          </ul>
          <p className="price">$18.99</p>

          <AddToCartButton
            quantity={
              props.itemsInCart?.find(
                (i) => i.price_data.product_data.name === props.name
              )?.quantity ?? 0
            } // try to find the existing count in our shopping cart before assuming count = 0
            name={props.name}
            onAddToCartClick={props.handleAddToCartClick}
            onRemoveFromCartClick={props.handleRemoveFromCartClick}
          />
        </div>
        <div
          style={{
            display: "table",
            marginLeft: "250px",
            top: "-550px",
            position: "relative",
          }}
        >
          <div style={{ display: "table-row" }}>
            {text(1)}
            {text(2)}
          </div>
          <div style={{ display: "table-row" }}>
            {text(3)}
            {text(4)}
          </div>
        </div>
        <a href={nextPage} target="blank">
          <img class="nextImage" src={next} alt=""/>
          </a>
      </div>
    </div>
  );
};

export default Product;
