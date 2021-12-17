import testImg from '../../../test.jpg';
import {
  Card,
  Link,
  CardList,
  CardItem,
  ImgCont,
  Img,
  DescCont,
  CategoryCont,
  Category,
  Star,
  Desc,
} from '../../Card.style';
import styled from 'styled-components';

function TravelSlider() {
  return (
    <Slider>
      <Handler>
        <Title>Title</Title>
        <IconBox>
          <Left>⬅</Left>
          <Right>➡</Right>
        </IconBox>
      </Handler>
      <Card>
        <Link>
          <LikesList>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
            <LikesItem>
              <ImgCont>
                <Img src={testImg}></Img>
              </ImgCont>
              <DescCont>
                <CategoryCont>
                  <Category>this is Category</Category>
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                </CategoryCont>
                <Desc>
                  Lorem ipsum dolor sit a m e t consectetur adipisicing
                  veritatis sunt vel? Error velit expedita voluptate
                </Desc>
              </DescCont>
            </LikesItem>
          </LikesList>
        </Link>
      </Card>
    </Slider>
  );
}
const LikesList = styled(CardList)`
  justify-content: start;
  flex-wrap: nowrap;
`;
const LikesItem = styled(CardItem)`
  &:nth-child(1) ~ li {
    margin-top: 0rem;
    margin-left: 2rem;
  }
`;

const Slider = styled.div`
  margin-top: 1rem;
  padding: 0.2rem;
`;

const Handler = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 1.2rem;
`;
const IconBox = styled.div``;
const Left = styled.i`
  font-size: 1.2rem;
`;
const Right = styled.i`
  font-size: 1.2rem;
`;

export default TravelSlider;
