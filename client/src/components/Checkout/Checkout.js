import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Checkout.css";

console.log(process.env.REACT_APP_FKEY);
console.log(process.env.REACT_APP_AUTH0_DOMAIN);

//returns a promise that resolves with the stripe object as soon as Stripe.js loads
const stripePromise = loadStripe(`${process.env.REACT_APP_FKEY}`);

const Checkout = (props) => {
  // When the customer clicks on the button, redirect them to Checkout.
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    //creates checkout session
    const response = await fetch("/create-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.itemsInCart.filter((e) => e.quantity > 0)),
    });
    console.log("request made");

    const session = await response.json();

    //redirects customer to checkout after it's created
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error.message);
      window.location.href = "/Home/?error=true";
    }
    // else, checkout session was successful and the user made a payment,
    //append to the user's payment history
  };

  return (
    <div className="checkoutButtonParent">
      <button
        className="checkoutButton"
        id="checkout-button"
        role="link"
        onClick={handleClick}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default Checkout;
