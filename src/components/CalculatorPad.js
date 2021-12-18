import React from "react";
import OutpurScrn from "./OutpurScrn";

class CalculatorPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="button-box">
        <button onClick={this.props.clear} id="clear" value="Clear">
          Clear
        </button>
        <button onClick={this.props.operator} id="divide" value="/">
          /
        </button>
        <button onClick={this.props.operator} id="multiply" value="x">
          x
        </button>
        <button onClick={this.props.number} id="seven" value="7">
          7
        </button>
        <button onClick={this.props.number} id="eight" value="8">
          8
        </button>
        <button onClick={this.props.number} id="nine" value="9">
          9
        </button>
        <button onClick={this.props.operator} id="subtract" value="-">
          -
        </button>
        <button onClick={this.props.number} id="four" value="4">
          4
        </button>
        <button onClick={this.props.number} id="five" value="5">
          5
        </button>
        <button onClick={this.props.number} id="six" value="6">
          6
        </button>
        <button onClick={this.props.operator} id="add" value="+">
          +
        </button>
        <button onClick={this.props.number} id="one" value="1">
          1
        </button>
        <button onClick={this.props.number} id="two" value="2">
          2
        </button>
        <button onClick={this.props.number} id="three" value="3">
          3
        </button>
        <button onClick={this.props.evaluate} id="equals" value="=">
          =
        </button>
        <button onClick={this.props.number} id="zero" value="0">
          0
        </button>
        <button onClick={this.props.decimal} id="decimal" value=".">
          .
        </button>
      </div>
    );
  }
}

export default CalculatorPad;
