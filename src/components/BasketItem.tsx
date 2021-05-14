import styled from "@emotion/styled";
import { observer } from "mobx-react";

const Self = styled.div`
  display: flex;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

const Name = styled.div`
  flex: 2;
`;

const Price = styled.div`
  flex: 1;
`;

const Count = styled.div`
  flex: 1;
`;

const Return = styled.div`
  margin-left: auto;
  color: #f06595;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface BasketItemProps {
  item: {
    name: string;
    price: string | number;
    count: number;
  };
  onTake: (name: string) => -1 | void;
}

function BasketItem({ item, onTake }: BasketItemProps) {
  function handleReturn() {
    onTake(item.name);
  }

  return (
    <Self>
      <Name>{item.name}</Name>
      <Price>{item.price}</Price>
      <Count>{item.count}</Count>
      <Return onClick={handleReturn}>Return</Return>
    </Self>
  );
}

export default observer(BasketItem);
