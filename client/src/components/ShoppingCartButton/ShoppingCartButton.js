import React from "react";
import AddToCartButton from "./../AddToCartButton/AddToCartButton.js";
import "./ShoppingCartButton.css";
import Checkout from "./../Checkout/Checkout.js";

export default class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);

    // bind all clicking mechanisms
    this.ShowSidebar = this.ShowSidebar.bind(this);
    this.ShowNoSidebar = this.ShowNoSidebar.bind(this);
  }

  ShowSidebar() {
    document.getElementById("cartSideNavID").style.width = "250px";
    this.forceUpdate();
    console.log("Show the Sidebar 55\n");
  }

  ShowNoSidebar() {
    document.getElementById("cartSideNavID").style.width = "0px";
    this.forceUpdate();
    console.log("No Show the Sidebar\n");
  }

  render() {
    const totalCost = this.props.itemsInCart.reduce(
      (acc, item) => acc + 18.99 * item.quantity,
      0
    );

    let shoppingCartItems = (
      <div>
        {this.props.itemsInCart.map((item) => {
          // if you decrease to 0, remove from shopping cart
          if (item.quantity != 0) {
            return (
              <div id={item.name} className="cart-item">
                <p className="cart-item-name">{item.name}</p>
                <AddToCartButton
                  quantity={item.quantity} // try to find the existing count in our shopping cart before assuming count = -
                  name={item.name}
                  onAddToCartClick={() =>
                    this.props.onAddToCartClick(item.name)
                  }
                  onRemoveFromCartClick={() =>
                    this.props.onRemoveFromCartClick(item.name)
                  }
                />
              </div>
            );
          }
        })}
      </div>
    );

    let showCart = (
      <div>
        <button onMouseDown={this.ShowSidebar}>Cart</button>
        <div id="cartSideNavID" class="sidenav">
          <a
            href="javascript:void(0)"
            class="closebtn"
            onMouseDown={this.ShowNoSidebar}
          >
            Close
          </a>
          <h4>Your Box</h4>
          {shoppingCartItems}
          <p>Total Cost: {totalCost}</p>
          <Checkout itemsInCart={this.props.itemsInCart}/>
        </div>
      </div>
    );

    return <div className="shopping-cart-parent">{showCart}</div>;
  }
}
