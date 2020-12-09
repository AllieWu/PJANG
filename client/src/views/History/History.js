import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";

import "./History.css";
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
    //get payment intents
    let resp;
    let session;
    let items;
    const customer = this.props.currentUser.id;
    console.log(customer);
    console.log("Getting payment history...");
    resp = await axios.get("/api/stripe/payment-intents?ID=" + customer);
    console.log("Payment history recieved!");

    console.log("Specifying products...")
    //for each payment intent, find the associated checkout session and the line_items (products) included
    resp.data.payments.forEach(async (e) => {
      //get session
      session = await axios.get("/api/stripe/sessions?ID=" + e.id);
      //get line items of session
      items = await axios.get("/api/stripe/line-items?ID=" + session.data.session[0].id);
      e.line_items = items.data.line_items;
    })
    console.log(resp.data.payments);

    this.setState({ response: resp });
    this.forceUpdate();
  }

  render() {
    let orders = (
      <div>
        {this.state.response?.data?.payments?.map(function (payment) {
          return (
            <div style={{ display: "table-row" }}>
              <div className="pastOrder">
                <h3 className="orderText left">
                  {Number((payment.amount / 100).toFixed(2))} {payment.currency}{" "}
                </h3>
                <h3 className="orderText right">
                  {moment.unix(payment.created).tz("EST").format("LLLL")}
                </h3>
                <div class="details">
                  <p>example stuff</p>
                </div>
              </div>
            </div>
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
