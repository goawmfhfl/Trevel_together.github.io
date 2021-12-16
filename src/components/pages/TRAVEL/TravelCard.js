import testImg from '../../../test.jpg';
import { Category, Star, Price, Discount } from '../../Card.style';
import styled from 'styled-components';

function TravelCard() {
  return (
    <>
      <CardList>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
        <CardItem>
          <Link>
            <ImageCont>
              <Img src={testImg}></Img>
            </ImageCont>
            <CardCont>
              <Category>this is category</Category>
              <Star>⭐️⭐️⭐️⭐️⭐️</Star>
              <Info>
                Iure, deleniti aut. Non cum expedita nobis facilis velit iure
                reprehenderit est. ipsum dolor sit amet.
              </Info>
              <Price>USD 9.45</Price>
              <Discount>10.22</Discount>
            </CardCont>
          </Link>
        </CardItem>
      </CardList>
    </>
  );
}

const CardList = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;
const CardItem = styled.li`
  width: 45%;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px;
  &:nth-child(2) ~ li {
    margin-top: 1rem;
  }
`;
const Link = styled.a``;
const ImageCont = styled.figure`
  box-sizing: border-box;
`;
const Img = styled.img`
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: contain;
`;
const CardCont = styled.div`
  padding: 0 0.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Info = styled.span`
  font-size: 1.2rem;
  margin-bottom: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default TravelCard;
