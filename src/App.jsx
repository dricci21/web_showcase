import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import QRCode from './pages/QRCode';
import Slots from './pages/Slots';
import Tictactoe from './pages/Tictactoe';
import './App.css';

function App() {
  return (
    
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/qrcode" className="nav-link">QR Code</Link>
          <Link to="/slots" className="nav-link">Slots</Link>
          <Link to="/Tictactoe" className="nav-link">TicTacToe</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode" element={<QRCode />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/Tictactoe" element={<Tictactoe />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
