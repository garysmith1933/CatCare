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
    return (_jsx("div", Object.assign({ className: "navbar" }, { children: user ?
            _jsxs("div", Object.assign({ className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 } }, { children: [_jsx(Button, Object.assign({ variant: "contained", style: { textDecoration: "none", color: "white" }, onClick: onLogout }, { children: "Logout" })), _jsx(Link, Object.assign({ to: '/newCat' }, { children: "Register New Cat" }))] }))
            :
                _jsxs("div", Object.assign({ className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 } }, { children: [_jsx(Link, Object.assign({ to: '/home' }, { children: "Home" })), _jsx(Link, Object.assign({ to: '/login' }, { children: "Login" })), _jsx(Link, Object.assign({ to: '/signup' }, { children: "Sign Up" }))] })) })));
};
export default Navbar;
