import React, { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import Signup from './pages/signup';
import Navbar from './components/Navbar';
import Login from './pages/login'

const App: FC = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
