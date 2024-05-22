//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Usebutton from './components/Usebutton';
import Listmap from './components/Listmap';
import Mapping from './components/Mapping';
import Api from './components/Api';
import { Card } from '@mui/material';
import Card1 from './components/Card1';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/s" element={<Statebasics/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/use" element={<Usebutton/>} />
      <Route path="/list" element={<Listmap/>} />
      <Route path="/m" element={<Mapping/>} />
      <Route path="/api" element={<Api/>} />
      <Route path="/card1" element={<Card1/>} />


    </Routes>
    </div>
  );
}

export default App;
