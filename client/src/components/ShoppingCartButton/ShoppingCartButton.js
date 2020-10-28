import React from "react";
import "./ShoppingCartButton.css";


export default class ShoppingCartButton extends React.Component {
  constructor(props) {
    super(props);

    // bind all clicking mechanisms
    this.ShowSidebar     = this.ShowSidebar.bind(this);
    this.ShowNoSidebar   = this.ShowNoSidebar.bind(this);
  }
  
  ShowSidebar() {
    document.getElementById("cartSideNavID").style.width = "250px";
    this.forceUpdate();
	 console.log("Show the Sidebar 55\n");
	 }

  ShowNoSidebar()  {
    document.getElementById("cartSideNavID").style.width = "0px";
    this.forceUpdate();
	 console.log("No Show the Sidebar\n");
	 }


  render() {
  let showCart = (
      <div >
	    <button onMouseDown={this.ShowSidebar}>Cart</button>
	    <div id="cartSideNavID" class="sidenav">
	       <a href="javascript:void(0)" class="closebtn" onMouseDown={this.ShowNoSidebar}>Close</a>
		   <h4> Your Box</h4>
	       <a href="#">About</a>
 	       <a href="#">Services</a>
	       <a href="#">Clients</a>
 	      <a href="#">Contact</a>
	    </div>
      </div>
    );

    return <div className="shopping-cart-parent">{showCart}</div>;
  }
}