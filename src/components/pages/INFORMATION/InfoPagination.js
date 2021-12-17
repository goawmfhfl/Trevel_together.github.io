import styled from 'styled-components';

function InfoPagination() {
  return (
    <Pigination>
      <PageHandler>
        <Left>⬅</Left>
        <List>
          <Item>
            <NumberBtn type="button">
              <Number>1</Number>
            </NumberBtn>
          </Item>
          <Item>
            <NumberBtn type="button">
              <Number>2</Number>
            </NumberBtn>
          </Item>
          <Item>
            <NumberBtn type="button">
              <Number>3</Number>
            </NumberBtn>
          </Item>
          <Item>
            <NumberBtn type="button">
              <Number>4</Number>
            </NumberBtn>
          </Item>
          <Item>
            <NumberBtn type="button">
              <Number>5</Number>
            </NumberBtn>
          </Item>
        </List>
        <Right>➡</Right>
      </PageHandler>
    </Pigination>
  );
}

const Pigination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
const PageHandler = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.i`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;
const Right = styled.i`
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NumberBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;
  font-size: 1rem;
  padding: 0px;
  border: none;
  color: rgb(51, 51, 51);
  background-color: transparent;
`;

const Number = styled.span`
  color: rgb(0, 175, 160);
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: bold;
  text-align: center;
`;
export default InfoPagination;
