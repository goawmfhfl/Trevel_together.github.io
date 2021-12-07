import React from 'react';
import './App.scss';

import TravelPage from './components/pages/TRAVEL/Travel.js';
import LikesPage from './components/pages/LIKES/Likes.js';
import InformationPage from './components/pages/INFORMATION/Information.js';
import MyPage from './components/pages/MYPAGE/MyPage.js';
import CartPage from './components/pages/CART/Cart';

import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="head-container">
        <h1 className="head_title">Travel together</h1>
        <p className="head_icon">✈️</p>
      </header>
      <div className="container">
        <Route exact path="/" component={TravelPage} />
        <Route exact path="/likes" component={LikesPage} />
        <Route exact path="/information" component={InformationPage} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/cart" component={CartPage} />
        {/* <Route exact path="/detail" component={MyPage} /> */}
      </div>
      <nav>
        <div className="iconbox">
          <button>
            <i className="fas fa-heart"></i>
            <p>travel</p>
          </button>
          <button>
            <i className="fas fa-heart"></i>
            <p>travel</p>
          </button>
          <button>
            <i className="fas fa-heart"></i>
            <p>travel</p>
          </button>
          <button>
            <i className="fas fa-heart"></i>
            <p>travel</p>
          </button>
        </div>
      </nav>
    </div>
  );
}


export default App;
