import React from 'react';
import './App.scss';
import styled from 'styled-components';
import TravelPage from './components/pages/TRAVEL/Travel.js';
import LikesPage from './components/pages/LIKES/Likes.js';
import InformationPage from './components/pages/INFORMATION/Information.js';
import MyPage from './components/pages/MYPAGE/MyPage.js';
import CartPage from './components/pages/CART/Cart';
import ProductsPage from './components/pages/PRODUCTS/products';

import { Link, Route, Switch } from 'react-router-dom';

const PageDiv = styled.div`
  background-color: #fff;
  max-width: 768px;
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-weight: bold;
  color: #000;
`;
const HeadTitle = styled.h1`
  font-size: 3rem;
`;
const HeadIcon = styled.p`
  font-size: 3rem;
  margin-left: 0.5rem;
`;
const MainContainer = styled.div`
  padding: 10px;
`;

const BotContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 24px;
  color: #fff;
  background-color: skyblue;
  position: sticky;
`;
const NavIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Icon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.3em;
  color: #fff;
`;
const IconText = styled.div`
  font-size: 1.2rem;
  color: #fff;
`;

function App() {
  return (
    <>
      <PageDiv calssName="App">
        <header className="header">
          <HeadContainer>
            <HeadTitle>Travel together</HeadTitle>
            <HeadIcon>✈️</HeadIcon>
          </HeadContainer>
        </header>
        <hr />
        <section className="section">
          <MainContainer>
            <Route exact path="/" component={TravelPage} />
            <Route exact path="/likes" component={LikesPage} />
            <Route exact path="/information" component={InformationPage} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/detail" component={ProductsPage} />
          </MainContainer>
        </section>
        <nav className="nav">
          <BotContainer>
            <a href="#none">
              <NavIcon>
                <Icon className="fas fa-heart"></Icon>
                <IconText> icon1 </IconText>
              </NavIcon>
            </a>
            <a href="#none">
              <NavIcon>
                <Icon className="fas fa-heart"></Icon>
                <IconText> icon2 </IconText>
              </NavIcon>
            </a>
            <a href="#none">
              <NavIcon>
                <Icon className="fas fa-heart"></Icon>
                <IconText> icon3 </IconText>
              </NavIcon>
            </a>
            <a href="#none">
              <NavIcon>
                <Icon className="fas fa-heart"></Icon>
                <IconText> icon4 </IconText>
              </NavIcon>
            </a>
          </BotContainer>
        </nav>
      </PageDiv>
    </>
  );
}

export default App;
