import { Component } from "react";
import { inject, observer } from "mobx-react";
import Counter from "./stores/counter";

@inject("counter")
@observer
class App extends Component {
  render() {
    const { counter } = this.props as { counter: Counter };
    return (
      <>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
      </>
    );
  }
}

export default App;
