
import './App.css';
import {  BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Pgcd from './components/Pgcd';
import Parite from './components/Parite';
import Factoriel from './components/Factoriel';
import Counter from './components/Counter';
import Basic from './components/Basic';
import Subscribe from './components/Subscribe';
import Api from './components/Api';
import TodoApp from './components/Todo';
import { UserForm, UserList } from './components/Users';
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
            <li>
            <Link to="/api">Api</Link>
            </li>
            <li>
            <Link to="/todo">Todo</Link>
            </li>
            <li>
            <Link to="/user">User</Link>
            </li>
            <li>
            <Link to="/adduser">AddUser</Link>
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
        <Route path='/api' element={<Api/>} ></Route>
        <Route path='/todo' element={<TodoApp/>} ></Route>
        <Route path='/user' element={<UserList/>} ></Route>
        <Route path='/adduser' element={<UserForm/>} ></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
