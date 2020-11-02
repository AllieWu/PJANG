import React from "react";
import "./AddToCartButton.css";

export default class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      key: props.key,
      onAddToCartClick: props.onAddToCartClick,
      onRemoveFromCartClick: props.onRemoveFromCartClick,
    };

    // bind all clicking mechanisms
    this.cartIncrement = this.cartIncrement.bind(this);
    this.cartDecrement = this.cartDecrement.bind(this);
  }

  cartIncrement() {
    this.state.onAddToCartClick(this.state.key); // update the shopping cart

    // this is to update the button type
    this.state.count++;
    this.forceUpdate(); // force update makes the component re-render (so we can recalculate the incrementDecrementComponent)
  }

  cartDecrement() {
    this.state.onRemoveFromCartClick(this.state.key); // up date the shopping cart

    // this is to update the button type
    this.state.count--;
    this.forceUpdate();
  }

  render() {
    let addToCartComponent = (
      <button
        className="height-width100 countText"
        onMouseDown={this.cartIncrement}
      >
        ADD TO CART
      </button>
    );

    let incrementDecrementComponent = (
      <div className="height-width100 vertical-align">
        <span>
          <button
            onMouseDown={this.cartDecrement}
            className="increment-decrement-button"
          >
            -
          </button>
        </span>
        <span className="countText">{this.state.count}</span>
        <span>
          <button
            onMouseDown={this.cartIncrement}
            className="increment-decrement-button"
          >
            +
          </button>
        </span>
      </div>
    );

    let componentToShow = (
      <div className="height-width100">
        {this.state.count == 0
          ? addToCartComponent
          : incrementDecrementComponent}
      </div>
    );

    return <div className="add-to-cart-parent">{componentToShow}</div>;
  }
}
