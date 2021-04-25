import { Component } from "react";
import { inject, observer } from "mobx-react";
import CounterStore from "stores/counter";

@inject("counter")
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props as { counter: CounterStore };
    return (
      <>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
      </>
    );
  }
}

export default Counter;
