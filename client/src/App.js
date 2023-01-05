import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
const App = () => {
    return (_jsx("div", { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Homepage, {}) }) }) }));
};
export default App;
