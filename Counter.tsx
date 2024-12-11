import React, { Component } from 'react';

// Step 1: Define the types for props and state
interface Props {} // No props are expected for this component
interface State {
  count: number; // The state has a single property 'count' of type number
}

// Step 2: Use Props and State in the Component class
class Counter extends Component<Props, State> {
  // Step 3: Initialize state with the correct type
  state: State = {
    count: 0,
  };

  // Step 4: Ensure the increment method is properly typed
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Render method remains the same, but TypeScript ensures type safety
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 6: Export the component
export default Counter;
