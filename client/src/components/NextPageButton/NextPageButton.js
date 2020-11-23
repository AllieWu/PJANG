import React from "react";
import "./NextPageButton.css";
import {Redirect, Link} from 'react-router-dom';
// use import NextPageButton from "./../../components/NextPageButton/NextPageButton";
// use <NextPageButton  redirectpage="/newpage_1" />
// npm install --save-dev @iconify/react @iconify/icons-carbon
export default class NextPageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state                  = { x: 0, y: 0 };

    // bind all clicking mechanisms
    this.PutBackToNormal = this.PutBackToNormal.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }
  
  routeChange() {	
     console.log("Changing the route to [",this.props.redirectpage, "]\n");
     window.location.pathname = this.props.redirectpage;
  }

  CaptureAndUpdate(e) {
  this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  //console.log("Show the NextPageButton [",this.state.x, ",", this.state.y, "] \n");
  if (this.state.x > 85) {
    document.getElementById(this.props.id).style.cx = 85;
  } else {
	  if (this.state.x < 26) {
         document.getElementById(this.props.id).style.cx = 26;
      } else {
         document.getElementById(this.props.id).style.cx = this.state.x;
	  }
  }
  if (this.state.y > 85) {
    document.getElementById(this.props.id).style.cy = 85;
  } else {
	  if (this.state.y < 26) {
         document.getElementById(this.props.id).style.cy = 26;
      } else {
         document.getElementById(this.props.id).style.cy = this.state.y;
	  }
  }    
    document.getElementById(this.props.id).style.stroke = "black";
  }

  PutBackToNormal()  {
    document.getElementById(this.props.id).style.cx = 60;
    document.getElementById(this.props.id).style.cy = 60;
	console.log("No Show the NextPageButton\n");
	 }


  render() {

  let showNextPage = (
		<div>
      <button className="nextPageButton" id= {this.props.id2}
      onMouseMove={this.CaptureAndUpdate.bind(this)} onMouseLeave={this.PutBackToNormal}
      onMouseDown={this.routeChange}>
	      <svg viewBox="0 0 120 120" height="120" width="120" > 
          <circle  id={this.props.id}  z-index="1" stroke = "black" cx="60" cy="60" r="25" stroke-width="1" fill="none"  />
		      <text style={{fontWeight: "bold"},  {fontSize: 16}} x="57" y="64">v</text>
		    </svg>
		  </button>
		</div>
    );

    return <div className="nextpagebutton-parent">{showNextPage}</div>;
  }
}