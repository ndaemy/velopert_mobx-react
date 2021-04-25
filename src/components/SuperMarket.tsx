import SuperMarketTemplate from "./SuperMarketTemplate";
import ShopItemList from "./ShopItemList";
import BasketItemList from "./BasketItemList";

function SuperMarket() {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
}

export default SuperMarket;
