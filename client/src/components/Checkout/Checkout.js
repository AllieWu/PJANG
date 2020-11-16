import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
//import "./Checkout.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//require('dotenv').config({path: '../../../../../.env'});

//console.log(process.env.REACT_APP_FKEY);

//returns a promise that resolves with the stripe object as soon as Stripe.js loads
const stripePromise = loadStripe('pk_test_51HbYaBJLO8JomVlxAM0xPNa8aOTJhtpR5ewl0faUyrHlhr53Lh0TM1EpjULdrUKBLo81b9fTBfzFiOtUlS9pDGxs00moKvzhXG');

//to make toast notifications work
toast.configure();

const Checkout = (props) => {

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log("WLS: " + window.location.search)
    console.log("URLSearchParams: " + query)

    //when redirected back to site, send notification depending on status of checkout page
    if (query.get("success")) {
      //"Order placed! You will receive an email confirmation."
      toast("Success! You will be emailed your receipt shorlty", { type: "success" });
    }

    if (query.get("canceled")) {
      //"Could not connect to Checkout. Please try again later"
      //"Order canceled -- continue to shop around and checkout when you're ready."
      toast("Order canceled", { type: "error" });
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-session", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(props.itemsInCart)
    });
    console.log("request made");

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      toast("Could not connect to Checkout. Please try again later", { type: "error" });
    }
  };

  const checkB = () => {

    console.log(props.itemsInCart[0].quantity);
    const data = JSON.stringify(props.itemsInCart);
    console.log(data[0].quantity);

  }

  return(
    <button id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  )

}

export default Checkout;