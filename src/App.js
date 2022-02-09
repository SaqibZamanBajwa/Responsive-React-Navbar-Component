import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/products' />
          <Route path='/services' />
          <Route path='/contact' />
          <Route path='/about' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
