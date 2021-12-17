import React from "react";
import OutpurScrn from "./OutpurScrn";

class CalculatorPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="button-box">
        <button onClick={this.onClick} id="clear" value="Clear">
          Clear
        </button>
        <button onClick={this.onClick} id="divide" value="/">
          /
        </button>
        <button onClick={this.onClick} id="multiply" value="x">
          x
        </button>
        <button onClick={this.onClick} id="seven" value="7">
          7
        </button>
        <button onClick={this.onClick} id="eight" value="8">
          8
        </button>
        <button onClick={this.onClick} id="nine" value="9">
          9
        </button>
        <button onClick={this.onClick} id="subtract" value="-">
          -
        </button>
        <button onClick={this.onClick} id="four" value="4">
          4
        </button>
        <button onClick={this.onClick} id="five" value="5">
          5
        </button>
        <button onClick={this.onClick} id="six" value="6">
          6
        </button>
        <button onClick={this.onClick} id="add" value="+">
          +
        </button>
        <button onClick={this.onClick} id="one" value="1">
          1
        </button>
        <button onClick={this.onClick} id="two" value="2">
          2
        </button>
        <button onClick={this.onClick} id="three" value="3">
          3
        </button>
        <button onClick={this.onClick} id="equals" value="=">
          =
        </button>
        <button onClick={this.onClick} id="zero" value="0">
          0
        </button>
        <button onClick={this.onClick} id="decimal" value=".">
          .
        </button>
      </div>
    );
  }
}

export default CalculatorPad;
