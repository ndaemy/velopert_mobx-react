import styled from "@emotion/styled";

const Self = styled.div`
  background: white;
  border: 1px solid #495057;
  padding: 0.5rem;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: #495057;
    color: white;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Name = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
`;

interface ShopItemProps {
  name: string;
  price: number;
  onPut: (name: string, price: number) => void;
}

function ShopItem({ name, price, onPut }: ShopItemProps) {
  function handleClick() {
    onPut(name, price);
  }

  return (
    <Self onClick={handleClick}>
      <Name>{name}</Name>
      <div>{price} won</div>
    </Self>
  );
}

export default ShopItem;
