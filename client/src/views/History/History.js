<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import blueLaundrLogo from "./../../assets/blueCombine.png";

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response: undefined };

    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  async handleLoad() {
    let resp;
    const customer = this.props.currentUser.id;
    console.log(customer);
    console.log("Getting payment history...");
    resp = await axios.get("/api/stripe/payment-intents?ID=" + customer);
    console.log("Payment history recieved!");
    console.log(resp);

    this.setState({ response: resp });
    this.forceUpdate();
  }

  render() {
    let orders = (
      <div>
        {this.state.response?.data?.payments?.map(function (payment) {
          return (
            <h3 style={{ marginBottom: ".2em" }}>
              {payment.amount} {payment.currency}{" "}
              {moment
                .unix(payment.created)
                .tz("MST")
                .format("YYYY-MM-DDTHH:mm:ssZ")}
            </h3>
          );
        })}
      </div>
    );

    return (
      <div style={{ marginLeft: "1%" }}>
        <div className="topnav" style={{ paddingBottom: "0" }}>
          <Link id="logo-link" to="/">
            <img
              className="topnav-logo"
              style={{ marginLeft: "0" }}
              src={blueLaundrLogo}
              alt="Laundr Logo"
            />
          </Link>
        </div>
        <div style={{ marginLeft: "1.2%" }}>
          <h1>Welcome To Your Dashboard</h1>
          <h1 style={{ marginBottom: "1em" }}>{this.props.currentUser.name}</h1>
          <h2 style={{ marginBottom: ".5em" }}>Past Orders</h2>
          {orders}
        </div>
      </div>
    );
  }
}
=======
import React from 'react'
import axios from 'axios';

const History = (props) => {

    window.onload = async () => {
        console.log("hi");
        const customer = props.currentUser.id
        console.log(customer);
        console.log("Getting payment history...");
        const response = await axios.get( '/api/stripe/payment-intents?ID=' + customer);
        console.log("Payment history recieved!");
        console.log(response);
    }

    return (
        <div>
            <h1>Welcome to your dashboard!</h1>
            <h1>{props.currentUser.name}</h1>
        </div>
    )
};

export default History;
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
