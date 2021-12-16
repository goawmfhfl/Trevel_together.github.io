import styled from 'styled-components';

function MyProfile() {
  return (
    <Container>
      <MyInfo>
        <MyIcon className="fas fa-user-circle"></MyIcon>
        <MyEmail>goawmfhfl@likelion.org</MyEmail>
      </MyInfo>
      <List>
        <Item>
          <Icon className="fas fa-shopping-cart"></Icon>
          <Text>Cart</Text>
        </Item>
        <Item>
          <Icon className="far fa-calendar-check"></Icon>
          <Text>Reservation</Text>
        </Item>
        <Item>
          <Icon className="far fa-heart"></Icon>
          <Text>Likes</Text>
        </Item>
        <Item>
          <Icon className="fas fa-sign-out-alt"></Icon>
          <Text>Log out</Text>
        </Item>
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyIcon = styled.i`
  font-size: 10rem;
  color: grey;
`;

const MyEmail = styled.span`
  position: relative;
  margin-top: 1rem;
  font-size: 1.2rem;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 1%;
    bottom: -5px;
    left: 25%;
    background-color: #000;
  }
`;
const List = styled.ul`
  margin-top: 3rem;
  border: 1px solid grey;
  border-bottom: none;
`;
const Item = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: grey;
  }
`;
const Icon = styled.i`
  width: 25%;
  display: block;
  font-size: 2.5rem;
  padding: 1rem 0;
  margin-left: 1rem;
`;
const Text = styled.span`
  width: 74%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  font-size: 2rem;
`;

export default MyProfile;
