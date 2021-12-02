
import './App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="head_title">Travel together</h1>
        <p className="head_icon">✈️</p>
      </header>
      <nav className="nav-travel">
        <ul className="list-travelNav">
          <li className="on link-travelNav">
            <a href="#none">
              <i className="link-icon">🏖</i>
              <span>travel</span>
            </a>
          </li>
          <li className="on link-travelNav">
            <a href="#none">
              <i className="link-icon">🏖</i>
              <span className="link-tit">travel</span>
            </a>
          </li>
          <li className="on link-travelNav">
            <a href="#none">
              <i className="link-icon">🏖</i>
              <span>travel</span>
            </a>
          </li>
          <li className="on link-travelNav">
            <a href="#none">
              <i className="link-icon">🏖</i>
              <span>travel</span>
            </a>
          </li>
        </ul>
      </nav>
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
