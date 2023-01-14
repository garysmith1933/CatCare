import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../context/authContext";
import { Button } from "@mui/material";
const Navbar = () => {
    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const onLogout = () => {
        logout();
        navigate('/');
    };
    return (_jsx("div", { className: "navbar", children: user ?
            _jsxs("div", { className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 }, children: [_jsx(Button, { variant: "contained", style: { textDecoration: "none", color: "white" }, onClick: onLogout, children: "Logout" }), _jsx(Link, { to: '/newCat', children: "Register New Cat" })] })
            :
                _jsxs("div", { className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 }, children: [_jsx(Link, { to: '/home', children: "Home" }), _jsx(Link, { to: '/login', children: "Login" }), _jsx(Link, { to: '/signup', children: "Sign Up" })] }) }));
};
export default Navbar;
