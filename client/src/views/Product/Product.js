import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pages from "./productinfo.json";
import "./../../assets/style.css";

import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";

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

import watermelonBottom from "./../../assets/detergentImages/watermelon_bottom.png";
import coffeeBottom from "./../../assets/detergentImages/coffee_bottom.png";
import eucalyptusBottom from "./../../assets/detergentImages/eucalyptus_bottom.png";
import freshBottom from "./../../assets/detergentImages/freshair_bottom.png";
import gardeniaBottom from "./../../assets/detergentImages/gardenia_bottom.png";
import mahoganyBottom from "./../../assets/detergentImages/mahogany_bottom.png";
import zipperSideways from "./../../assets/detergentImages/zipper_sideways.png";

import bomb1_5 from "./../../assets/bombs/Laundr Bomb Angle1.5 White.png";
import bomb1 from "./../../assets/bombs/Laundr Bomb Angle1 White.png";
import bomb2 from "./../../assets/bombs/Laundr Bomb Angle2 White.png";

let img, imgTop, imgBot, alt, back;
const Product = (props) => {
  useEffect(() => {
    switch (props.match.params.pageNumber) {
      case "watermelon-cucumber":
        back = watermelonBackground;
        img = watermelonImg;
        imgBot = watermelonBottom;
        alt = "watermelon";
        props.setPage(pages[0]);
        break;
      case "eucalyptus-tea-tree":
         back = eucalyptusBackground;
         img = eucalyptusImg;
         imgBot = eucalyptusBottom;
         alt = "eucalyptus";
         props.setPage(pages[5]);
         break;  
      case "white-gardenia":
        back = gardeniaBackground;
        img = gardeniaImg;
        imgBot = gardeniaBottom;
        alt = "gardenia";
        props.setPage(pages[1]);
        break;
      case "fresh-air":
        back = freshBackground;
        img = freshImg;
        imgBot = freshBottom;
        alt = "freshair";
        props.setPage(pages[3]);
        break;  
      case "coffee-vanilla":
        back = coffeeBackground;
        img = coffeeImg;
        imgBot = coffeeBottom;
        alt = "coffee";
        props.setPage(pages[4]);
        break;
      case "mahogany-teakwood":
        back = mahoganyBackground;
        img = mahoganyImg;
        imgBot = mahoganyBottom;
        alt = "mahogany";
        props.setPage(pages[2]);
        break;
    }
  });

  return (
    <div>
      <div style={{top: "15%"}}>
        <div className = {alt + "Background1"}></div>
        <div className = {alt + "Background2"}></div>
        <div className = {alt + "Background3"}></div>
        <div className = {alt + "Background4"}></div>
        <div className = {alt + "Background5"}></div>
        <h1 className = {alt + "Title"}>{props.page.name2}</h1>
        

        <div class="productpWrapper">
          <img
            src={zipperSideways} 
            alt={"Product"}
            class="productpZipper"
          />     
          <img
            src={imgBot}
            alt={"Product"}
            class="productpBag"
          />
        </div>

        <img src={bomb1_5} alt="Bomb Image 1.5" className="Bomb1_5"></img>
        <img src={bomb1} alt="Bomb Image 1" className="Bomb1"></img>
        <img src={bomb2} alt="Bomb Image 2" className="Bomb2"></img>

        <h1 className = {alt + "Title bottomTitle"}>{props.page.name3}</h1>
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
        style={{ width: "200px" }}
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
        <h4 className = "text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis, lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet justo augue nec tellus. Aenean eget semper arcu, eget elementum massa. Fusce ornare tellus sed mi hendrerit venenatis. Nullam vitae magna tempor nunc facilisis posuere vitae at dolor. Maecenas porttitor vestibulum ligula at dapibus. Sed at ultrices mi. Morbi dignissim dictum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed erat sem, aliquet non egestas eu, cursus eget quam.</h4>
        <h4 className = "text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis, lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet justo augue nec tellus. Aenean eget semper arcu, eget elementum massa. Fusce ornare tellus sed mi hendrerit venenatis. Nullam vitae magna tempor nunc facilisis posuere vitae at dolor. Maecenas porttitor vestibulum ligula at dapibus. Sed at ultrices mi. Morbi dignissim dictum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed erat sem, aliquet non egestas eu, cursus eget quam.</h4>
        <h4 className = "text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis, lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet justo augue nec tellus. Aenean eget semper arcu, eget elementum massa. Fusce ornare tellus sed mi hendrerit venenatis. Nullam vitae magna tempor nunc facilisis posuere vitae at dolor. Maecenas porttitor vestibulum ligula at dapibus. Sed at ultrices mi. Morbi dignissim dictum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed erat sem, aliquet non egestas eu, cursus eget quam.</h4>
        <h4 className = "text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis, lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet justo augue nec tellus. Aenean eget semper arcu, eget elementum massa. Fusce ornare tellus sed mi hendrerit venenatis. Nullam vitae magna tempor nunc facilisis posuere vitae at dolor. Maecenas porttitor vestibulum ligula at dapibus. Sed at ultrices mi. Morbi dignissim dictum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed erat sem, aliquet non egestas eu, cursus eget quam.</h4>
      </div>
    


    </div>
  );
};

export default Product;
