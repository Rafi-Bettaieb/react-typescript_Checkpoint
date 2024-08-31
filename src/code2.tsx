import React, { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  // Initialize state
  state: CounterState = {
    count: 0,
  };

  // Increment method to increase the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Reset method to set count to 0
  reset = () => {
    this.setState({ count: 0 });
  };

  // Rendering the component
  render() {
    return (
      <div className="counter">
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset} className="reset-button">Reset</button>
      </div>
    );
  }
}

export default Counter;
