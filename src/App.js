import "./styles.scss";
import React from "react";
import CalculatorPad from "./components/CalculatorPad";
import OutputScrn from "./components/OutpurScrn";

const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: ""
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.initialize = this.initialize.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
  }
  handleOperator(e) {
    const value = e.target.value;
    const { formula, prevVal, evaluated } = this.state;
    this.setState({
      currentVal: value,
      evaluated: false
    });
    if (evaluated) {
      this.setState({
        formula: prevVal + value
      });
    } else if (!endsWithOperator.test(formula)) {
      this.setState({
        prevVal: formula,
        formula: formula + value
      });
    } else if (!endsWithNegativeSign.test(formula)) {
      this.setState({
        formula:
          (endsWithNegativeSign.test(formula + value) ? formula : prevVal) +
          value
      });
    } else if (value !== "‑") {
      this.setState({
        formula: prevVal + value
      });
    }
  }
  handleNumber(e) {
    const { currentVal, formula, evaluated } = this.state;
    const value = e.target.value;
    this.setState({ evaluated: false });
    if (evaluated) {
      this.setState({
        currentVal: value,
        formula: value !== 0 ? value : ""
      });
    } else {
      this.setState({
        currentVal:
          currentVal === "0" || isOperator.test(currentVal)
            ? value
            : currentVal + value,
        formula:
          currentVal === "0" && value === "0"
            ? formula === ""
              ? value
              : formula
            : /([^.0-9]0|^0)$/.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value
      });
    }
  }
  handleDecimal() {
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: "0.",
        formula: "0.",
        evaluated: false
      });
    } else if (!this.state.currentVal.includes(".")) {
      this.setState({ evaluated: false });
      if (this.state.currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (
        endsWithOperator.test(this.state.formula) ||
        (this.state.currentVal === "0" && this.state.formula === "")
      ) {
        this.setState({
          currentVal: "0.",
          formula: this.state.formula + "0."
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
          formula: this.state.formula + "."
        });
      }
    }
  }
  handleEvaluate() {
    if (!this.state.currentVal.includes("Limit")) {
      let expression = this.state.formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, "*")
        .replace(/‑/g, "-")
        .replace("--", "+0+0+0+0+0+0+");
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formula:
          expression
            .replace(/\*/g, "⋅")
            .replace(/-/g, "‑")
            .replace("+0+0+0+0+0+0+", "‑-")
            .replace(/(x|\/|\+)‑/, "$1-")
            .replace(/^‑/, "-") +
          "=" +
          answer,
        prevVal: answer,
        evaluated: true
      });
    }
  }
  initialize() {
    this.setState({
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: "",
      evaluated: false
    });
  }
  render() {
    return (
      <div id="wrapper">
        <OutputScrn
          currentValue={this.state.currentVal}
          prevValue={this.state.prevVal}
        />
        <CalculatorPad
          number={this.handleNumber}
          operator={this.handleOperator}
          clear={this.initialize}
          decimal={this.handleDecimal}
          evaluate={this.handleEvaluate}
        />
      </div>
    );
  }
}

export default App;
