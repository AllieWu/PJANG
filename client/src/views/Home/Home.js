import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./../../assets/style.css";

import productInfo from "./../Product/productinfo.json"
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";

import watermelonImg from "./../../assets/detergentImages/watermelonMockup.png";
import coffeeImg from "./../../assets/detergentImages/coffeeMockup.png";
import eucalyptusImg from "./../../assets/detergentImages/eucalyptusMockup.png";
import freshImg from "./../../assets/detergentImages/freshairMockup.png";
import gardeniaImg from "./../../assets/detergentImages/gardeniaMockup.png";
import mahoganyImg from "./../../assets/detergentImages/mahoganyMockup.png";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getProductPage(name) {
    let classPrePend, img, path;
    let desc1, desc2, scent1, scent2, scent3;

    switch (name) {
      case "Eucalyptus Tea Tree":
        classPrePend = "eucalyptus";
        img = eucalyptusImg;
        path = "eucalyptus-tea-tree";
        break;
      case "White Gardenia":
        classPrePend = "gardenia";
        img = gardeniaImg;
        path = "white-gardenia";
        break;
      case "Fresh Air":
        classPrePend = "freshair";
        img = freshImg;
        path = "fresh-air";
        break;
      case "Coffee Vanilla":
        classPrePend = "coffee";
        img = coffeeImg;
        path = "coffee-vanilla";
        break;
      case "Mahogany Teakwood":
        classPrePend = "mahogany";
        img = mahoganyImg;
        path = "mahogany-teakwood";
        break;
      case "Watermelon Cucumber":
        classPrePend = "watermelon";
        img = watermelonImg;
        path = "watermelon-cucumber";
        break;
    }

    const matching = productInfo.find((ele) => ele.name === name);
    [desc1, desc2, scent1, scent2, scent3] = [matching.desc1, matching.desc2, matching.scent1, matching.scent2, matching.scent3];
    

    return (
      <div className="child">
        <div className={classPrePend + " homeHeader"}>
          <h1 className="title">{name + " Laundr Bombs"}</h1>
          <h2>{desc1}</h2>
          <h2 >{desc2}</h2>
          <h3>This fragrance has hints of:
          </h3>
          <ul style={{marginLeft: "5%"}}>
          <li>{scent1}</li>
          <li>{scent2}</li>
          <li>{scent3}</li></ul>
          <p className="price">$18.99</p>
          <AddToCartButton
            style={{
              width: "200px",
              bottom: "0",
              left: "0",
            }}
            quantity={
              this.props.itemsInCart?.find((i) => i.price_data.product_data.name === name)?.quantity ?? 0
            } // try to find the existing count in our shopping cart before assuming count = 0
            name={name}
            onAddToCartClick={this.props.handleAddToCartClick}
            onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
          />
            <Link
            id="logo-link"
            to={"/Product/" + path}
            style={{ width: "50px", height: "50px", color: "black" }}
          >
            <img
              src={img}
              alt={classPrePend + " Image"}
              className="productImage"
            />
          </Link>
        </div>

        <div className="backgroundContainer">
          <div className={classPrePend + "Background"}></div>
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
/* render() {return (
                <div className="App">
                    <Link to="/Product/watermelon-cucumber">Watermelon Cucumber</Link>
                    <header className="App-header">
                        {items.map((item) => (
                            <div
                                id="example-product"
                                style={{
                                display: "inline-block",
                                width: "450px"
                            }}>
                                <p
                                    style={{
                                    fontSize: "12px",
                                    height: "auto",
                                    width: "250px"
                                }}>
                                    Purchase {item.name}
                                </p>
                                <AddToCartButton style={{
                                    width: "200px"
                                }} quantity={this
                                    .props
                                    .itemsInCart
                                    .find((i) => i.name === item.name)
                                    ?.quantity ?? 0} // try to find the existing count in our shopping cart before assuming count = 0
                                    name={item.name} onAddToCartClick={this.props.handleAddToCartClick} onRemoveFromCartClick={this.props.handleRemoveFromCartClick}/>
                            </div>
                        ))}
                    </header} < /div>
    );
  }*/
