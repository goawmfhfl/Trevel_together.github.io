import React from 'react'
import img from './test.jpg'
import './App.scss';
// import travelNav from './travelNav.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="head_title">Travel together</h1>
        <p className="head_icon">✈️</p>
      </header>
      <div className="container">
        <nav className="nav-travel">
          <ul className="list-travelNav">
            <li className="link-travelNav on">
              <a href="#none" className="link-box">
                <i className="link-icon">🏖</i>
                <span className="link-tit">travel</span>
              </a>
            </li>
            <li className="link-travelNav">
              <a href="#none" className="link-box">
                <i className="link-icon">🏖</i>
                <span className="link-tit">travel</span>
              </a>
            </li>
            <li className="link-travelNav">
              <a href="#none" className="link-box">
                <i className="link-icon">🏖</i>
                <span className="link-tit">travel</span>
              </a>
            </li>
            <li className="link-travelNav">
              <a href="#none" className="link-box">
                <i className="link-icon">🏖</i>
                <span className="link-tit">travel</span>
              </a>
            </li>
          </ul>
        </nav>
        <article className="category-btn">
          <button type="button" className="category-btn">Category</button>
          <ul className="category-list">
            <li><a href="#none">infj</a></li>
            <li><a href="#none">infj</a></li>
            <li><a href="#none">infj</a></li>
          </ul>
        </article>
        <ul className="card-list">
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#none">
              <div className="card-cover">
                <img src={img} alt="이미지" className="card-img" />
              </div>
              <div className="card-cont">
                <div className="card-cate">
                  <span className="card-cate-tit">Lorem, ipsum.</span>
                  <span className="card-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div className="card-desc">
                  <div class="card-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                  <span class="card-desc-price">USD 9.45</span>
                  <span class="card-desc-sale">10.22</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
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
