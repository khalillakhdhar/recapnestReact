
import './App.css';
import {  BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Pgcd from './components/Pgcd';
import Parite from './components/Parite';
import Factoriel from './components/Factoriel';
import Counter from './components/Counter';
import Basic from './components/Basic';
import Subscribe from './components/Subscribe';
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/pgcd">PGCD</Link>
          </li>
          <li>
            <Link to="/parite">Parité</Link>
          </li>
          <li>
            <Link to="/factoriel">Factoriel</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
           
          </li>
          <li>
            <Link to="/subscribe">Subscribe</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/pgcd" element={<Pgcd titre="diviseur" />} />
        <Route path="/parite" element={<Parite />} />
        <Route path="/factoriel" element={<Factoriel />} />
        <Route path='/counter' element={<Counter/>} ></Route>
        <Route path='/form' element={<Basic/>} ></Route>
        <Route path='/subscribe' element={<Subscribe/>} ></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
