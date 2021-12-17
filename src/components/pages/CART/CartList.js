import img from '../../../test.jpg';
import styled from 'styled-components';

function CartList() {
  return (
    <Cart>
      <List>
        <Item>
          <Check>
            <CheckBtn type="checkbox"></CheckBtn>
          </Check>
          <Img src={img}></Img>
          <Content>
            <DescCont>
              <Title>TitleTitleTitle</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, enim facilis officiis ea nesciunt iusto assumenda
              </Desc>
            </DescCont>
            <Counter>
              <Up>Up</Up>
              <Count>1</Count>
              <Down>Down</Down>
            </Counter>
            <Price>USD 30.65</Price>
          </Content>
        </Item>
        <Item>
          <Check>
            <CheckBtn type="checkbox"></CheckBtn>
          </Check>
          <Img src={img}></Img>
          <Content>
            <DescCont>
              <Title>TitleTitleTitle</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, enim facilis officiis ea nesciunt iusto assumenda
              </Desc>
            </DescCont>
            <Counter>
              <Up>Up</Up>
              <Count>1</Count>
              <Down>Down</Down>
            </Counter>
            <Price>USD 30.65</Price>
          </Content>
        </Item>
        <Item>
          <Check>
            <CheckBtn type="checkbox"></CheckBtn>
          </Check>
          <Img src={img}></Img>
          <Content>
            <DescCont>
              <Title>TitleTitleTitle</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, enim facilis officiis ea nesciunt iusto assumenda
              </Desc>
            </DescCont>
            <Counter>
              <Up>Up</Up>
              <Count>1</Count>
              <Down>Down</Down>
            </Counter>
            <Price>USD 30.65</Price>
          </Content>
        </Item>
        <Item>
          <Check>
            <CheckBtn type="checkbox"></CheckBtn>
          </Check>
          <Img src={img}></Img>
          <Content>
            <DescCont>
              <Title>TitleTitleTitle</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, enim facilis officiis ea nesciunt iusto assumenda
              </Desc>
            </DescCont>
            <Counter>
              <Up>Up</Up>
              <Count>1</Count>
              <Down>Down</Down>
            </Counter>
            <Price>USD 30.65</Price>
          </Content>
        </Item>
      </List>
    </Cart>
  );
}

const Cart = styled.div``;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  margin-top: 1rem;
`;
const Check = styled.label`
  display: flex;
  align-items: center;
`;
const CheckBtn = styled.input``;

const Img = styled.img`
  margin-left: 0.5rem;
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const DescCont = styled.div`
  padding-left: 1rem;
  width: 60%;
`;

const Title = styled.span`
  display: block;
`;
const Desc = styled.span`
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Counter = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;
const Up = styled.i`
  font-size: 1.2rem;
`;
const Count = styled.i`
  font-size: 1.2rem;
`;
const Down = styled.i`
  font-size: 1.2rem;
`;
const Price = styled.span`
  display: block;
  text-align: center;
  width: 20%;
  font-size: 1.5rem;
`;

export default CartList;
