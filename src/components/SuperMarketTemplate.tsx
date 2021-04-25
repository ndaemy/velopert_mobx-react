import React from "react";
import styled from "@emotion/styled";

const Self = styled.div`
  width: 768px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const BlockWrapper = styled.div`
  padding: 1rem;
  flex: 1;
`;

const ItemsWrapper = styled(BlockWrapper)`
  background: #f8f9fa;
`;

const BasketWrapper = styled(BlockWrapper)``;

const Title = styled.h2`
  margin-top: 0;
`;

interface SuperMarketTemplateProps {
  items: React.ReactElement | null;
  basket: React.ReactElement | null;
}

function SuperMarketTemplate({ items, basket }: SuperMarketTemplateProps) {
  return (
    <Self>
      <ItemsWrapper>
        <Title>Product</Title>
        {items}
      </ItemsWrapper>
      <BasketWrapper>
        <Title>Basket</Title>
        {basket}
      </BasketWrapper>
    </Self>
  );
}

export default SuperMarketTemplate;
