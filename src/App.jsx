import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Assignment0 from './pages/Assignment0';
import Assignment1 from './pages/Assignment1';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assignment0" element={<Assignment0 />} />
        <Route path="/assignment1" element={<Assignment1 />} />
      </Routes>
    </Router>
  );
}

export default App;

