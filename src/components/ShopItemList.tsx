import ShopItem from "./ShopItem";

const items = [
  { name: "Water", price: 800 },
  { name: "Sin Ramen", price: 900 },
  { name: "Poca chip", price: 1500 },
  { name: "Shrimp chip", price: 1000 },
];

function ShopItemList() {
  return (
    <div>
      {items.map((item) => (
        <ShopItem name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default ShopItemList;
