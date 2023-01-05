import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
const App = () => {
    return (_jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/login", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Homepage, {}) })] }) }));
};
export default App;
