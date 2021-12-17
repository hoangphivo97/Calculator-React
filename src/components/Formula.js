import React from "react";
import { Textfit } from "react-textfit";

class Formula extends React.Component {
  render() {
    return <Textfit className="screen" mode="single" max={70}></Textfit>;
  }
}

export default Formula;
