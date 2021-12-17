import img from '../../../test.jpg';
import styled from 'styled-components';
function InfoCard() {
  return (
    <Post>
      <List>
        <Item>
          <ImgCon>
            <Img src={img} />
          </ImgCon>
          <ContentCon>
            <Title>Lorem, ipsum ipsum</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
            </Desc>
            <DataWrapper>
              <Update>123123</Update>
              <View>👀</View>
            </DataWrapper>
          </ContentCon>
        </Item>
        <Item>
          <ImgCon>
            <Img src={img} />
          </ImgCon>
          <ContentCon>
            <Title>Lorem, ipsum ipsum</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
            </Desc>
            <DataWrapper>
              <Update>123123</Update>
              <View>👀</View>
            </DataWrapper>
          </ContentCon>
        </Item>
        <Item>
          <ImgCon>
            <Img src={img} />
          </ImgCon>
          <ContentCon>
            <Title>Lorem, ipsum ipsum</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
            </Desc>
            <DataWrapper>
              <Update>123123</Update>
              <View>👀</View>
            </DataWrapper>
          </ContentCon>
        </Item>
        <Item>
          <ImgCon>
            <Img src={img} />
          </ImgCon>
          <ContentCon>
            <Title>Lorem, ipsum ipsum</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
            </Desc>
            <DataWrapper>
              <Update>123123</Update>
              <View>👀</View>
            </DataWrapper>
          </ContentCon>
        </Item>
        <Item>
          <ImgCon>
            <Img src={img} />
          </ImgCon>
          <ContentCon>
            <Title>Lorem, ipsum ipsum</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
              deleniti vero libero voluptates voluptatem reprehenderit eveniet
            </Desc>
            <DataWrapper>
              <Update>123123</Update>
              <View>👀</View>
            </DataWrapper>
          </ContentCon>
        </Item>
      </List>
    </Post>
  );
}

const Post = styled.div``;
const List = styled.ul`
  margin-top: 1rem;
`;
const Item = styled.li`
  display: flex;
  & ~ li {
    margin-top: 0.5rem;
  }
`;
const ImgCon = styled.figure``;
const Img = styled.img`
  width: 200px;
  border-radius: 10px;
`;
const ContentCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
`;
const Title = styled.h2`
  font-size: 1.3rem;
`;
const Desc = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DataWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Update = styled.span`
  font-size: 1.2rem;
`;
const View = styled.i`
  margin-left: 0.5rem;
`;

export default InfoCard;
