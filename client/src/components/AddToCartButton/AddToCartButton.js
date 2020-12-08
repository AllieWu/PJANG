import React from "react";
import "./AddToCartButton.css";

export default class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.quantity,
      onAddToCartClick: props.onAddToCartClick,
      onRemoveFromCartClick: props.onRemoveFromCartClick,
    };

    // bind all clicking mechanisms
    this.cartIncrement = this.cartIncrement.bind(this);
    this.cartDecrement = this.cartDecrement.bind(this);
  }

  cartIncrement() {
<<<<<<< HEAD
    this.state.onAddToCartClick(this.props.id); // update the shopping cart
=======
    this.state.onAddToCartClick(this.props.name); // update the shopping cart
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

    // this is to update the button type
    this.setState({ quantity: this.state.quantity + 1 });
    this.forceUpdate(); // force update makes the component re-render (so we can recalculate the incrementDecrementComponent)
  }

  cartDecrement() {
<<<<<<< HEAD
    this.state.onRemoveFromCartClick(this.props.id); // up date the shopping cart
=======
    this.state.onRemoveFromCartClick(this.props.name); // up date the shopping cart
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a

    // this is to update the button type
    this.setState({ quantity: this.state.quantity - 1 });
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
        <span className="countText">{this.props.quantity}</span>
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
        {this.props.quantity === 0
          ? addToCartComponent
          : incrementDecrementComponent}
      </div>
    );

    return <div className="add-to-cart-parent">{componentToShow}</div>;
  }
}
