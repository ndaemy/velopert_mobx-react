import { action, computed, makeObservable, observable } from "mobx";
import RootStore from "./index";

export interface Item {
  name: string;
  price: number;
  count: number;
}

class MarketStore {
  selectedItems: Item[] = [];
  root;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      selectedItems: observable,
      put: action,
      take: action,
    });
  }

  put = (name: string, price: number) => {
    const { number } = this.root.counter;
    // 존재하는지 찾고
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      return;
    }
    exists.count += number;
  };

  take = (name: string) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    if (!itemToTake) return -1;

    itemToTake.count--;
    if (!itemToTake.count) {
      // 갯수가 0개면 없앤다.
      this.selectedItems = this.selectedItems.filter(x => x !== itemToTake);
    }
  };

  @computed
  get total() {
    console.log("Calculating...");
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  }
}

export default MarketStore;
