import React from "react";
import AddToCartButton from "./../AddToCartButton/AddToCartButton.js";
import "./ShoppingCartButton.css";
import Checkout from "./../Checkout/Checkout.js";

export default class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showCart: false };

    // bind all clicking mechanisms
    this.ShowSidebar = this.ShowSidebar.bind(this);
    this.ShowNoSidebar = this.ShowNoSidebar.bind(this);
  }

  ShowSidebar() {
    this.setState({ showCart: true });
    this.forceUpdate();
  }

  ShowNoSidebar() {
    this.setState({ showCart: false });
    this.forceUpdate();
  }

  render() {
    const totalCost = this.props.itemsInCart?.reduce(
      (acc, item) => acc + 18.99 * item.quantity,
      0
    );
    const showCart = this.state.showCart;

    let shoppingCartItems = (
      <div>
        {this.props.itemsInCart.map((ele) => {
          // if you decrease to 0, remove from shopping cart
          if (ele.quantity !== 0) {
            return (
              <div id={ele.price_data.product_data.name} className="cart-item">
                <p className="cart-item-name">
                  {ele.price_data.product_data.name}
                </p>
                <AddToCartButton
                  quantity={ele.quantity}
                  name={ele.price_data.product_data.name}
                  onAddToCartClick={() =>
                    this.props.onAddToCartClick(
                      ele.price_data.product_data.name
                    )
                  }
                  onRemoveFromCartClick={() =>
                    this.props.onRemoveFromCartClick(
                      ele.price_data.product_data.name
                    )
                  }
                />
              </div>
            );
          }
          return undefined;
        })}
      </div>
    );

    let cart = (
      <div className="shopping-cart-parent">
        <div id="cartSideNavID" class="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onMouseDown={this.ShowNoSidebar}
          >
            Close
          </a>
          <h2
            style={{
              paddingLeft: "1.5em",
              marginBottom: "1em",
              letterSpacing: ".1em",
            }}
          >
            YOUR BOX
          </h2>
          {shoppingCartItems}
          <p
            style={{ paddingLeft: "1em", marginTop: "1.8em", fontSize: "2em" }}
          >
            Total Cost: {totalCost.toFixed(2)}
          </p>
          <Checkout itemsInCart={this.props.itemsInCart} />
        </div>
      </div>
    );

    return (
      <div>
        <button onMouseDown={this.ShowSidebar} className="cart-text">
          CART
        </button>
        {showCart ? cart : undefined}
      </div>
    );
  }
}
