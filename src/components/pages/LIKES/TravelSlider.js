import './TravelSlider.scss';
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
    <div>
      <div className="slider">
        <div className="slider-title">
          <h2 className="slider-tit">Travel</h2>
          <div className="slider-icon">
            <i>⬅</i>
            <i>➡</i>
          </div>
        </div>
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
      </div>
    </div>
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

export default TravelSlider;
