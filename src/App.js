import "./styles.scss";
import React from "react";
import CalculatorPad from "./components/CalculatorPad";
import OutputScrn from "./components/OutpurScrn";

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
  }
  render() {
    return (
      <div id="wrapper">
        <OutputScrn
          currentValue={this.state.currentVal}
          prevValue={this.state.prevVal}
        />
        <CalculatorPad />
      </div>
    );
  }
}

export default App;
