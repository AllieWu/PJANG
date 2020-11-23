import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import items from "./../Product/productinfo.json";
import NavBarButton       from "./../../components/NavBarButton/NavBarButton";
import NextPageButton       from "./../../components/NextPageButton/NextPageButton";


import "./../../assets/style.css";

import productInfo from "./../Product/productinfo.json";
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";

import watermelonImg from "./../../assets/detergentImages/watermelonMockup.png";
import coffeeImg from "./../../assets/detergentImages/coffeeMockup.png";
import eucalyptusImg from "./../../assets/detergentImages/eucalyptusMockup.png";
import freshImg from "./../../assets/detergentImages/freshairMockup.png";
import gardeniaImg from "./../../assets/detergentImages/gardeniaMockup.png";
import mahoganyImg from "./../../assets/detergentImages/mahoganyMockup.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getProductPage(name) {
    let classPrePend, img;
    let desc1, desc2, scent1, scent2, scent3;
    let redirectpage, newpage, newpage2;
  
    switch (name) {
      case "Eucalyptus Tea Tree":
        classPrePend = "eucalyptus";
        img = eucalyptusImg;
        newpage = "/newpage_1";
        newpage2 = "/newpage_2";
        redirectpage = "/product/eucalyptus-tea-tree";
        break;
      case "White Gardenia":
        classPrePend = "gardenia";
        img = gardeniaImg;
        newpage = "/newpage_3";
        newpage2 = "/newpage_4";
        redirectpage = "/product/white-gardenia";
        break;
      case "Fresh Air":
        classPrePend = "freshair";
        img = freshImg;
        newpage = "/newpage_5";
        newpage2 = "/newpage_6";
        redirectpage = "/product/fresh-air";
        break;
      case "Coffee Vanilla":
        classPrePend = "coffee";
        img = coffeeImg;
        newpage = "/newpage_7";
        newpage2 = "/newpage_8";
        redirectpage = "/product/coffee-vanilla";
        break;
      case "Mahogany Teakwood":
        classPrePend = "mahogany";
        img = mahoganyImg;
        newpage = "/newpage_9";
        newpage2 = "/newpage_10";
        redirectpage = "/product/mahogany-teakwood";
        break;
      case "Watermelon Cucumber":
      default:
        classPrePend = "watermelon";
        img = watermelonImg;
        newpage = "/newpage_11";
        newpage2 = "/newpage_12";
        redirectpage = "/product/watermelon-cucumber";
        break;
    }

    window.onload = function() {
      const query = new URLSearchParams(window.location.search);

      if (query.get("success")) {
        //"Order placed! You will receive an email confirmation."
        toast("Success! You will be emailed your receipt shortly", { type: "success" });
      }
      else if (query.get("error")) {
        //"Order canceled -- continue to shop around and checkout when you're ready."
        toast("Could not connect to Checkout. Please try again later", { type: "error" });
      }

    }
    const matching = productInfo.find((ele) => ele.name === name);
    [desc1, desc2, scent1, scent2, scent3] = [
      matching.desc1,
      matching.desc2,
      matching.scent1,
      matching.scent2,
      matching.scent3,
    ];

    return (
      <div className="child">
        <div className={classPrePend + " homeHeader"}>
          <h1 className="title">{name + " Laundr Bombs"}</h1>
          <h2>{desc1}</h2>
          <h2>{desc2}</h2>
          <h3>This fragrance has hints of:</h3>
          <ul style={{ marginLeft: "5%" }}>
            <li>{scent1}</li>
            <li>{scent2}</li>
            <li>{scent3}</li>
          </ul>
          <p className="price">$18.99</p>
		  
		  <div class="center">
			< NextPageButton id = {newpage} id2 = {newpage2} redirectpage={redirectpage}/> 
			</div> 
		  
          <AddToCartButton
            style={{
              width: "200px",
              bottom: "0",
              left: "0",
            }}
			
            quantity={
              this.props.itemsInCart?.find(
                (i) => i.price_data.product_data.name === name
              )?.quantity ?? 0
            } // try to find the existing count in our shopping cart before assuming count = 0
            name={name}
            onAddToCartClick={this.props.handleAddToCartClick}
            onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
          />
          <img
            src={img}
            alt={classPrePend + " Image"}
            className="productImage"
          />	
        </div>


        <div className="backgroundContainer">
          <div className={classPrePend + "BG background"}></div>
        </div>
      </div>
    );
	
	
	
	
	
	
  }

 render() {
    let productNames = [
      "Watermelon Cucumber",
      "Eucalyptus Tea Tree",
      "White Gardenia",
      "Fresh Air",
      "Coffee Vanilla",
      "Mahogany Teakwood",
    ];




    return (
	
      <div className="App">

	  
		
		
       

        <div className="container">
          {productNames.map((name) => this.getProductPage(name))}
        </div>
        

      </div>
    );
  }
  
}