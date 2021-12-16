import styled from 'styled-components';

function TravelNav() {
  return (
    <>
      <Nav>
        <List>
          <Item>
            <Link></Link>
            <Icon>✈️</Icon>
            <Text>text</Text>
          </Item>
          <Item>
            <Link></Link>
            <Icon>✈️</Icon>
            <Text>text</Text>
          </Item>
          <Item>
            <Link></Link>
            <Icon>✈️</Icon>
            <Text>text</Text>
          </Item>
          <Item>
            <Link></Link>
            <Icon>✈️</Icon>
            <Text>text</Text>
          </Item>
        </List>
      </Nav>
    </>
  );
}

const Nav = styled.nav``;
const List = styled.ul`
  display: flex;
  width: 100%;
  padding: 24px;
`;
const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;
const Link = styled.a``;
const Icon = styled.i`
  font-size: 30px;
`;
const Text = styled.p`
  font-size: 15px;
  margin-top: 7px;
  color: black;
`;

export default TravelNav;
