import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Home.css";
import "./../../assets/style.css";

<<<<<<< HEAD
=======
import productInfo from "./../Product/productinfo.json";
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
import NextPageButton from "./../../components/NextPageButton/NextPageButton";
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import Header from "./../../components/Header/Header.js";

<<<<<<< HEAD
=======
import watermelonImg from "./../../assets/detergentImages/watermelonMockup.png";
import coffeeImg from "./../../assets/detergentImages/coffeeMockup.png";
import eucalyptusImg from "./../../assets/detergentImages/eucalyptusMockup.png";
import freshImg from "./../../assets/detergentImages/freshairMockup.png";
import gardeniaImg from "./../../assets/detergentImages/gardeniaMockup.png";
import mahoganyImg from "./../../assets/detergentImages/mahoganyMockup.png";

>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
import watermelonTop from "./../../assets/detergentImages/watermelon_top.png";
import coffeeTop from "./../../assets/detergentImages/coffee_top.png";
import eucalyptusTop from "./../../assets/detergentImages/eucalyptus_top.png";
import freshTop from "./../../assets/detergentImages/freshair_top.png";
import gardeniaTop from "./../../assets/detergentImages/gardenia_top.png";
import mahoganyTop from "./../../assets/detergentImages/mahogany_top.png";
<<<<<<< HEAD

=======
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
import watermelonBottom from "./../../assets/detergentImages/watermelon_bottom.png";
import coffeeBottom from "./../../assets/detergentImages/coffee_bottom.png";
import eucalyptusBottom from "./../../assets/detergentImages/eucalyptus_bottom.png";
import freshBottom from "./../../assets/detergentImages/freshair_bottom.png";
import gardeniaBottom from "./../../assets/detergentImages/gardenia_bottom.png";
import mahoganyBottom from "./../../assets/detergentImages/mahogany_bottom.png";
import groupedBombs from "./../../assets/bombs/groupedBombs.png";

toast.configure();

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
  getProductPage(id, name) {
=======
  getProductPage(name) {
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
    let classPrePend, imgTop, imgBot;
    let desc1, desc2, scent1, scent2, scent3;
    let redirectpage, newpage, newpage2;

    switch (name) {
      case "Eucalyptus Tea Tree":
        classPrePend = "eucalyptus";
        imgTop = eucalyptusTop;
        imgBot = eucalyptusBottom;
        newpage = "/newpage_1";
        newpage2 = "/newpage_2";
        redirectpage = "/product/eucalyptus-tea-tree";
        break;
      case "White Gardenia":
        classPrePend = "gardenia";
        imgTop = gardeniaTop;
        imgBot = gardeniaBottom;
        newpage = "/newpage_3";
        newpage2 = "/newpage_4";
        redirectpage = "/product/white-gardenia";
        break;
      case "Fresh Air":
        classPrePend = "freshair";
        imgTop = freshTop;
        imgBot = freshBottom;
        newpage = "/newpage_5";
        newpage2 = "/newpage_6";
        redirectpage = "/product/fresh-air";
        break;
      case "Coffee Vanilla":
        classPrePend = "coffee";
        imgTop = coffeeTop;
        imgBot = coffeeBottom;
        newpage = "/newpage_7";
        newpage2 = "/newpage_8";
        redirectpage = "/product/coffee-vanilla";
        break;
      case "Mahogany Teakwood":
        classPrePend = "mahogany";
        imgTop = mahoganyTop;
        imgBot = mahoganyBottom;
        newpage = "/newpage_9";
        newpage2 = "/newpage_10";
        redirectpage = "/product/mahogany-teakwood";
        break;
      case "Watermelon Cucumber":
      default:
        classPrePend = "watermelon";
        imgTop = watermelonTop;
        imgBot = watermelonBottom;
        newpage = "/newpage_11";
        newpage2 = "/newpage_12";
        redirectpage = "/product/watermelon-cucumber";
        break;
    }

    window.onload = function () {
      const query = new URLSearchParams(window.location.search);
      if (query.get("success"))
        toast("Success! You will be emailed your receipt shortly", {
          type: "success",
        });
      else if (query.get("error"))
        toast("Could not connect to Checkout. Please try again later", {
          type: "error",
        });
    };

<<<<<<< HEAD
    const matching = this.props.products.find(
      (ele) => ele.metadata.priceID === id
    );
    [desc1, desc2, scent1, scent2, scent3] = [
      matching?.metadata.desc1,
      matching?.metadata.desc2,
      matching?.metadata.scent1,
      matching?.metadata.scent2,
      matching?.metadata.scent3,
    ];
    let item = this.props.itemsInCart?.find((i) => i.id === id);
=======
    const matching = productInfo.find((ele) => ele.name === name);
    [desc1, desc2, scent1, scent2, scent3] = [
      matching.desc1,
      matching.desc2,
      matching.scent1,
      matching.scent2,
      matching.scent3,
    ];

>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
    return (
      <div className="child">
        <div className={classPrePend + " homeHeader"}>
          <div className="autoscale">
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

            <AddToCartButton
<<<<<<< HEAD
              quantity={item?.quantity ?? 0}
              id={id}
=======
              quantity={
                this.props.itemsInCart?.find(
                  (i) => i.price_data.product_data.name === name
                )?.quantity ?? 0
              } // try to find the existing count in our shopping cart before assuming count = 0
              name={name}
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
              onAddToCartClick={this.props.handleAddToCartClick}
              onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
            />
          </div>

          <div className="productParent">
<<<<<<< HEAD
            <div class="wrapper" id="wrapper">
              <img src={imgTop} alt={"Product"} className="zipper" />
              <img src={imgBot} alt={"Product"} className="bottomBag" />
              <img
                src={groupedBombs}
                alt="groupedBombs"
                className="laundrBombs"
              />
            </div>
            <div className="center" id="openButton">
=======
            <div className="center">
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
              <NextPageButton
                id={newpage}
                id2={newpage2}
                redirectpage={redirectpage}
              />
            </div>
<<<<<<< HEAD
=======
            <div class="wrapper">
              <img src={imgTop} alt={"Product"} class="zipper" />
              <img src={imgBot} alt={"Product"} class="bottomBag" />
              <img src={groupedBombs} alt="groupedBombs" class="laundrBombs" />
            </div>
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
          </div>
        </div>

        <div className="backgroundContainer">
          <div className={classPrePend + "Background background"}></div>
        </div>
      </div>
    );
  }
  render() {
<<<<<<< HEAD
    console.log(this.props.products);
=======
    let productNames = [
      "Watermelon Cucumber",
      "Eucalyptus Tea Tree",
      "White Gardenia",
      "Fresh Air",
      "Coffee Vanilla",
      "Mahogany Teakwood",
    ];
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

    return (
      <div className="App">
        <Header
          itemsInCart={this.props.itemsInCart}
          handleAddToCartClick={this.props.handleAddToCartClick}
          handleRemoveFromCartClick={this.props.handleRemoveFromCartClick}
          page={"home"}
          currentUser={this.props.currentUser}
<<<<<<< HEAD
          products={this.props.products}
        />
        {this.props.products.map((product) =>
          this.getProductPage(product.metadata.priceID, product.metadata.name)
        )}
=======
        />
        {productNames.map((name) => this.getProductPage(name))}
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
      </div>
    );
  }
}
