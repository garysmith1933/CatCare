import React, { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
