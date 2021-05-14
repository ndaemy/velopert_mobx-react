import { inject, observer } from "mobx-react";
import MarketStore from "../stores/market";

interface TotalPriceProps {
  total?: number;
}

function TotalPrice({ total }: TotalPriceProps) {
  return (
    <div>
      <hr />
      <p>
        <b>Total: </b> {total}원
      </p>
    </div>
  );
}

export default inject<{ market: MarketStore }, unknown, any, unknown>(
  ({ market }) => ({ total: market.total })
)(observer(TotalPrice));
