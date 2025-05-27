// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import QRCode from './pages/QRCode';
import './App.css'; // Import the CSS file


function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/qrcode" className="nav-link">QR Code</Link>
      </nav>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qrcode" element={<QRCode />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

