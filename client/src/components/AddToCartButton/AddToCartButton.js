import React from "react";
import "./AddToCartButton.css";

export default class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // bind all clicking mechanisms
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.state.count++;
    // force update makes the component re-render (so we can recalculate the incrementDecrementComponent)
    this.forceUpdate();
  }

  decrement() {
    this.state.count--;
    this.forceUpdate();
  }

  render() {
    let addToCartComponent = (
      <button
        className="height-width100 countText"
        onMouseDown={this.increment}
      >
        ADD TO CART
      </button>
    );

    let incrementDecrementComponent = (
      <div className="height-width100 vertical-align">
        <span>
          <button
            onMouseDown={this.decrement}
            className="increment-decrement-button"
          >
            -
          </button>
        </span>
        <span className="countText">{this.state.count}</span>
        <span>
          <button
            onMouseDown={this.increment}
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
