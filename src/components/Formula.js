import React from "react";
import { Textfit } from "react-textfit";

class Formula extends React.Component {
  render() {
    return (
      <Textfit className="prev-value" mode="single" max={70}>
        {this.props.prevValue}
      </Textfit>
    );
  }
}

export default Formula;
