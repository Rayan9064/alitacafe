
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catering from './pages/Catering';
import CoffeeMerch from './pages/CoffeeMerch';
import Press from './pages/Press';
import About from './pages/About';
import Menu from './pages/Menu';
import Photos from './pages/Photos';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/catering" element={<Catering />} />
        <Route path="/coffee-merch" element={<CoffeeMerch />} />
        <Route path="/press" element={<Press />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
