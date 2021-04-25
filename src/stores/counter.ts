import { action, makeObservable, observable } from "mobx";

class CounterStore {
  @observable number = 0;

  constructor() {
    makeObservable(this);
  }

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };
}

export default CounterStore;
