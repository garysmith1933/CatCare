import React, { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Homepage/>}/>
        <Route path="/signup" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
