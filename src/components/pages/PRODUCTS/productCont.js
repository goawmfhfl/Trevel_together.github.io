import './productCont.scss';
import styled from 'styled-components';
import { Info, Category, Star, Price, Discount } from '../../Card.style';
import img from '../../../test.jpg';

function productCont() {
  return (
    <>
      <ProductCont>
        <Productimg>
          <Img src={img}></Img>
        </Productimg>
        <ProductDesc>
          <InfoCont>
            <PDCategory>Seoul</PDCategory>
            <PDInfo>doloribus deleniti, praesentium earum</PDInfo>
            <PDStar>⭐️⭐️⭐️⭐️⭐️</PDStar>
            <PDprice>USD 9.35</PDprice>
            <PDDiscout>6.35</PDDiscout>
          </InfoCont>
          <BtnCont>
            <Link>
              <Button>
                <Icon>🚀</Icon>
                <AddText>Text</AddText>
              </Button>
            </Link>
            <Link>
              <Button>
                <Icon>🚀</Icon>
                <AddText>Text</AddText>
              </Button>
            </Link>
          </BtnCont>
        </ProductDesc>
      </ProductCont>
    </>
  );
}
const ProductCont = styled.div``;
const Productimg = styled.figure``;
const Img = styled.img`
  background-size: contain;
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const ProductDesc = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const PDCategory = styled(Category)`
  display: block;
  padding-bottom: 0.2rem;
`;
const PDInfo = styled(Info)`
  padding-bottom: 0.7rem;
`;
const PDStar = styled(Star)`
  margin-left: 1rem;
  font-size: 1.1rem;
`;
const PDprice = styled(Price)``;
const PDDiscout = styled(Discount)``;

const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Link = styled.a``;
const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  background-color: #2c88d9;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
`;
const Icon = styled.i`
  font-size: 1.2rem;
`;
const AddText = styled.span`
  margin-left: 0.5rem;
`;

export default productCont;
