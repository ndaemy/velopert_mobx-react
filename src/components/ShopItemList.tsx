import ShopItem from "./ShopItem";
import { inject } from "mobx-react";
import MarketStore from "../stores/market";

const items = [
  { name: "Water", price: 800 },
  { name: "Sin Ramen", price: 900 },
  { name: "Poca chip", price: 1500 },
  { name: "Shrimp chip", price: 1000 },
];

interface ShopItemListProps {
  onPut?: (name: string, price: number) => void;
}

function ShopItemList({ onPut }: ShopItemListProps) {
  return (
    <div>
      {items.map(item => (
        <ShopItem
          key={item.name}
          name={item.name}
          price={item.price}
          onPut={onPut!}
        />
      ))}
    </div>
  );
}

export default inject<
  { market: MarketStore },
  unknown,
  { onPut: (name: string, price: number) => void },
  unknown
>(({ market }) => ({
  onPut: market.put,
}))(ShopItemList);
