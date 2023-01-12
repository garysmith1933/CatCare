import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import Signup from './pages/signup';
import Navbar from './components/Navbar';
import Login from './pages/login';
import NewCat from './pages/NewCat';
const App = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/newCat", element: _jsx(NewCat, {}) })] })] }));
};
export default App;
