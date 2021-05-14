import BasketItem from "./BasketItem";
import { inject, observer } from "mobx-react";
import MarketStore, { Item } from "../stores/market";

interface BasketItemListProps {
  items?: Item[];
  onTake?: (name: string) => -1 | void;
}

function BasketItemList({ items, onTake }: BasketItemListProps) {
  return (
    <>
      {items!.map(item => (
        <BasketItem key={item.name} item={item} onTake={onTake!} />
      ))}
    </>
  );
}

export default inject<{ market: MarketStore }, unknown, any, unknown>(
  ({ market }) => ({
    items: market.selectedItems,
    onTake: market.take,
  })
)(observer(BasketItemList));
