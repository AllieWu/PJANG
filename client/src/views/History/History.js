import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";

import "./History.css";
import blueLaundrLogo from "./../../assets/blueCombine.png";
import dropdownImg from "./../../assets/dropdown.png";

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],

      open1: false,
      open2: false,
      open3: false,
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
    window.addEventListener("toggle", this.togglePanel);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
    window.removeEventListener("toggle", this.togglePanel);
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
    console.log(resp);
    console.log("Specifying products...");
    //for each payment intent, find the associated checkout session and the line_items (products) included
    resp.data.payments.forEach(async (e) => {
      //get session
      session = await axios.get("/api/stripe/sessions?ID=" + e.id);
      //get line items of session
      items = await axios.get(
        "/api/stripe/line-items?ID=" + session.data.session[0].id
      );
      e.line_items = items.data.line_items;
    });
    console.log(resp.data.payments);

    this.setState({ response: resp });
  }

  togglePanel(event, panel) {
    console.log("toggling panel ", panel, " to");
    switch (panel) {
      case 1:
        console.log(!this.state.open1);
        this.setState({
          open1: !this.state.open1,
        });
        break;
      case 2:
        console.log(!this.state.open2);
        this.setState({
          open2: !this.state.open2,
        });
        break;
      case 3:
        console.log(!this.state.open3);
        this.setState({
          open3: !this.state.open3,
        });
        break;
    }
  }

  render() {
    let varToCheck;
    let orders = (
      <div>
        {this.state.response?.data?.payments?.map((payment, index) => {
          index++;
          switch (index) {
            case 1:
              varToCheck = this.state.open1;
              break;
            case 2:
              varToCheck = this.state.open2;
              break;
            case 3:
              varToCheck = this.state.open3;
              break;
          }

          return (
            <div className="pastOrderParent" id={"#" + index}>
              {varToCheck ? (
                <div
                  className="active pastOrder"
                  onClick={(e) => this.togglePanel(e, index)}
                >
                  <h3 className="orderText left">
                    {Number((payment.amount / 100).toFixed(2))}{" "}
                    {payment.currency}
                  </h3>
                  <h3 className="orderText">
                    {moment.unix(payment.created).tz("EST").format("LLLL")}
                  </h3>
                  <img className="dropdown-icon" src={dropdownImg} />
                  <div className="content">
                    {payment?.line_items?.map((product) => (
                      <div className="contentItem">
                        <p className="contentDetails orderText left ">
                          {Number((product.amount_total / 100).toFixed(2))}
                          {payment.currency}
                        </p>
                        <p className="contentDetails">{product.description}</p>
                        <p className="contentDetails">
                          {"Amount: " + product.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  id={"#" + index}
                  className="pastOrder"
                  onClick={(e) => this.togglePanel(e, index)}
                >
                  <h3 className="orderText left">
                    {Number((payment.amount / 100).toFixed(2))}{" "}
                    {payment.currency}
                  </h3>
                  <h3 className="orderText">
                    {moment.unix(payment.created).tz("EST").format("LLLL")}
                  </h3>
                  <img className="dropdown-icon" src={dropdownImg} />
                </div>
              )}
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
