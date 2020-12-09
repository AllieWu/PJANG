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
    this.state = { response: [], openArr: {} };

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

  togglePanel(e) {
    let temp = this.state.openArr.find((ele) => ele.paymentId === e) !== undefined ? this.state.openArr.find((ele) => ele.paymentId === e).state : false;

    this.setState({
      openArr: :,
    });
  }

  render() {
    let orders = (
      <div>
        {this.state.response?.data?.payments?.map((payment) => (
          <div className="pastOrderParent">
            {this.state.open ? (
              <div
                className="active pastOrder"
                onClick={(e) => this.togglePanel(e)}
              >
                <h3 className="orderText left">
                  {Number((payment.amount / 100).toFixed(2))} {payment.currency}
                </h3>
                <h3 className="orderText">
                  {moment.unix(payment.created).tz("EST").format("LLLL")}
                </h3>
                <img className="dropdown-icon" src={dropdownImg} />
                <div className="content">Show</div>
              </div>
            ) : (
              <div
                className="pastOrder"
                onClick={() => this.togglePanel(payment)}
              >
                <h3 className="orderText left">
                  {Number((payment.amount / 100).toFixed(2))} {payment.currency}
                </h3>
                <h3 className="orderText">
                  {moment.unix(payment.created).tz("EST").format("LLLL")}
                </h3>
                <img className="dropdown-icon" src={dropdownImg} />
              </div>
            )}
          </div>
        ))}
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
