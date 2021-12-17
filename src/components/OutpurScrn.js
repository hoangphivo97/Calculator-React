import React from "react";
import { Textfit } from "react-textfit";
import Formula from "./Formula.js";

class OutputScrn extends React.Component {
  render() {
    return (
      <Textfit className="screen" mode="single" max={70}>
        {this.props.currentValue}
      </Textfit>
    );
  }
}

export default OutputScrn;
