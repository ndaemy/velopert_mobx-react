import CounterStore from "./counter";
import MarketStore from "./market";

class RootStore {
  counter;
  market;

  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
