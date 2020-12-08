import React from "react";
import "./NextPageButton.css";

export default class NextPageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };

    // bind all clicking mechanisms
    this.PutBackToNormal = this.PutBackToNormal.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    window.location.pathname = this.props.redirectpage;
  }

  CaptureAndUpdate(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    if (this.state.x > 85) document.getElementById(this.props.id).style.cx = 85;
    else {
      if (this.state.x < 26)
        document.getElementById(this.props.id).style.cx = 26;
      else document.getElementById(this.props.id).style.cx = this.state.x;
    }

    if (this.state.y > 85) document.getElementById(this.props.id).style.cy = 85;
    else {
      if (this.state.y < 26)
        document.getElementById(this.props.id).style.cy = 26;
      else document.getElementById(this.props.id).style.cy = this.state.y;
    }
    document.getElementById(this.props.id).style.stroke = "black";
  }

  PutBackToNormal() {
    document.getElementById(this.props.id).style.cx = 60;
    document.getElementById(this.props.id).style.cy = 60;
  }

  render() {
    let showNextPage = (
      <div>
        <button
          className="nextPageButton"
          id={this.props.id2}
          onMouseMove={this.CaptureAndUpdate.bind(this)}
          onMouseLeave={this.PutBackToNormal}
          onMouseDown={this.routeChange}
        >
<<<<<<< HEAD
          <svg
            viewBox="0 0 120 120"
            height="120"
            width="120"
            className="circle"
          >
=======
          <svg viewBox="0 0 120 120" height="120" width="120">
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
            <circle
              id={this.props.id}
              z-index="1"
              stroke="black"
              cx="60"
              cy="60"
              r="25"
<<<<<<< HEAD
              strokeWidth="1"
=======
              stroke-width="1"
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
              fill="none"
            />
            <text
              style={({ fontWeight: "bolder" }, { fontSize: 16 })}
              x="55"
              y="66"
            >
              {"<"}
            </text>
          </svg>
        </button>
      </div>
    );

    return <div className="nextpagebutton-parent">{showNextPage}</div>;
  }
}
