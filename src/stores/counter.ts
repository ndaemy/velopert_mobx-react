import { action, makeObservable, observable } from "mobx";

class Counter {
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

export default Counter;
