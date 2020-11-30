import React from "react";
import "./NavBarButton.css";

export default class NavBarButton extends React.Component {
  constructor(props) {
    super(props);

    // bind all clicking mechanisms
    this.ShowNavBarButton = this.ShowNavBarButton.bind(this);
    this.ShowNoNavBarButton = this.ShowNoNavBarButton.bind(this);
  }

  ShowNavBarButton() {
    document.getElementById("myTopnav").style.height = "40px";
    this.forceUpdate();
    console.log("Show the NavBar 77\n");
    this.forceUpdate();
  }

  ShowNoNavBarButton() {
    document.getElementById("myTopnav").style.height = "0px";
    this.forceUpdate();
    console.log("No Show the NavBar\n");
    this.forceUpdate();
  }

  render() {
    let showNav = (
      <div>
        <button onMouseDown={this.ShowNavBarButton}>Links</button>
      </div>
    );

    return <div className="navbarbutton-parent">{showNav}</div>;
  }
}
