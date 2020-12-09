import React, { useEffect } from "react";
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

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: undefined,
      img: undefined,
      back: undefined,
      alt: undefined,
    };

    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  handleLoad() {
    switch (this.props.match.params.pageNumber) {
      case "watermelon-cucumber":
        this.setState({
          back: watermelonBackground,
          img: watermelonImg,
          alt: "watermelon",
        });
        break;
      case "eucalyptus-tea-tree":
        this.setState({
          back: eucalyptusBackground,
          img: eucalyptusImg,
          alt: "eucalyptus",
        });

        break;
      case "white-gardenia":
        this.setState({
          back: gardeniaBackground,
          img: gardeniaImg,
          alt: "gardenia",
        });

        break;
      case "fresh-air":
        this.setState({
          back: freshBackground,
          img: freshImg,
          alt: "freshair",
        });

        break;
      case "coffee-vanilla":
        this.setState({
          back: coffeeBackground,
          img: coffeeImg,
          alt: "coffee",
        });

        break;
      case "mahogany-teakwood":
        this.setState({
          back: mahoganyBackground,
          img: mahoganyImg,
          alt: "mahogany",
        });

        break;
    }
  }

  render() {
    let text = (number) => (
      <div className="text">
        <h3>PLACEHOLDER {number}</h3>
        <h4 className="placeholder-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
          nisi imperdiet, posuere turpis at, hendrerit mauris. Donec venenatis,
          lorem ut lobortis vulputate, magna mi interdum urna, non imperdiet
          justo augue nec tellus. Aenean eget semper arcu, eget elementum massa.
          Fusce ornare tellus sed mi hendrerit venenatis. Nullam vitae magna
          tempor nunc facilisis posuere vitae at dolor. Maecenas porttitor
          vestibulum ligula at dapibus. Sed at ultrices mi. Morbi dignissim
          dictum consectetur. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed erat sem, aliquet non
          egestas eu, cursus eget quam.
        </h4>
      </div>
    );
    let cartItem = this.props.itemsInCart.find(
      (c) => c.id === this.state.item.metadata.priceID
    );
    const {
      itemsInCart,
      handleAddToCartClick,
      handleRemoveFromCartClick,
      currentUser,
      products,
    } = this.props;

    let item = this.props.products.find(
      (i) => i.metadata.param === this.props.match.params.pageNumber
    );

    return (
      <div>
        <Header
          itemsInCart={itemsInCart}
          handleAddToCartClick={handleAddToCartClick}
          handleRemoveFromCartClick={handleRemoveFromCartClick}
          page={"product"}
          currentUser={currentUser}
          products={products}
        />
        <div style={{ top: "15%" }}>
          <div className={this.state.alt + "Background1"}></div>
          <div className={this.state.alt + "Background2"}></div>
          <div className={this.state.alt + "Background3"}></div>
          <div className={this.state.alt + "Background4"}></div>
          <div className={this.state.alt + "Background5"}></div>
          <h1 className={this.state.alt + "Title"}>{item?.metadata.name2}</h1>
          <img
            src={this.state.img}
            alt={item?.metadata.name + " Image"}
            className="productpImage"
          ></img>
          <h1 className={this.state.alt + "Title bottomTitle"}>
            {item?.metadata.name3}
          </h1>

          <div
            className="autoscale"
            style={{ marginLeft: "250px", top: "-600px", position: "relative" }}
          >
            <h1 className="title">{item?.metadata.name + " Laundr Bombs"}</h1>
            <h2>{item?.metadata.desc1}</h2>
            <h2>{item?.metadata.desc2}</h2>
            <h3>This fragrance has hints of:</h3>
            <ul style={{ marginLeft: "5%" }}>
              <li>{item?.metadata.scent1}</li>
              <li>{item?.metadata.scent2}</li>
              <li>{item?.metadata.scent3}</li>
            </ul>
            <p className="price">$18.99</p>

            <AddToCartButton
              quantity={cartItem?.quantity ?? 0}
              id={cartItem?.id}
              onAddToCartClick={handleAddToCartClick}
              onRemoveFromCartClick={handleRemoveFromCartClick}
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
        </div>
      </div>
    );
  }
}
