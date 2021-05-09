import BasketItem from "./BasketItem";
import { inject, observer } from "mobx-react";
import MarketStore, { Item } from "../stores/market";

interface BasketItemListProps {
  items?: Item[];
  total?: () => number;
  onTake?: (name: string) => -1 | void;
}

function BasketItemList({ items, total, onTake }: BasketItemListProps) {
  return (
    <>
      {items!.map(item => (
        <BasketItem
          key={item.name}
          name={item.name}
          price={item.price}
          count={item.count}
          onTake={onTake!}
        />
      ))}
      <p>
        <b>총합: </b> {total}원
      </p>
    </>
  );
}

export default inject<{ market: MarketStore }, unknown, any, unknown>(
  ({ market }) => ({
    items: market.selectedItems,
    total: market.total,
    onTake: market.take,
  })
)(observer(BasketItemList));
