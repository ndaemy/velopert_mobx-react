import { action, makeObservable, observable } from "mobx";
import RootStore from "./index";

class CounterStore {
  @observable number = 1;
  root;

  constructor(root: RootStore) {
    this.root = root;
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
