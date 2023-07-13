import React from 'react';
import logo from './logo.svg';
import './App.css';
//import HomeScreen from './Screens/HomeScreen';
import Home from './Screens/Home';
import TelaModifica from './Screens/TelaModifica';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home></Home>}>
      </Route>
      <Route path='/modifica/:id' element={<TelaModifica/>}></Route>
    </Routes>
    
   );
}

export default App;

