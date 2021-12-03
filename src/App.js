import React from 'react'
import './App.scss';

import TravelPage from './components/pages/TRAVEL/Travel.js'
import LikesPage from './components/pages/LIKES/Likes.js'
import InformationPage from './components/pages/INFORMATION/Information.js'
import MyPage from './components/pages/MYPAGE/MyPage.js'


function App() {
  return (
    <div className="App">
      <header>
        <h1 className="head_title">Travel together</h1>
        <p className="head_icon">✈️</p>
      </header>
      <div className="container">
        <TravelPage/>
        <LikesPage/>
        <InformationPage/>
        <MyPage/>
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
