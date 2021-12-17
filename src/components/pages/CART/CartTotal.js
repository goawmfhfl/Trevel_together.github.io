import styled from 'styled-components';

function CardTotal() {
  return (
    <PayMentCont>
      <TotalCont>
        <Text>ToTal</Text>
        <Price>USD 56.76</Price>
      </TotalCont>
      <BuyBtn>
        <BtnText>Buy</BtnText>
      </BuyBtn>
    </PayMentCont>
  );
}
const PayMentCont = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;
const TotalCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;
const Price = styled.span`
  font-size: 1.2rem;
  color: #2c88d9;
  font-weight: bold;
`;
const BuyBtn = styled.button`
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: #2c88d9;
  color: #fff;
  font-weight: bold;
`;

const BtnText = styled.span`
  font-size: 1.2rem;
`;

export default CardTotal;
