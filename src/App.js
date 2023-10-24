import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Pemrograman Web
      </a>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello React!
      </p>
    </header>
  );
}

function About() {
  return (
    <h1>About Us</h1>
  );
}

function Contact() {
  return (
    <h1>Contact</h1>
  );
}


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Hero} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
