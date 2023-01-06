import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const onLogout = () => {
        logout();
        navigate('/');
    };
    console.log(user);
    return (_jsx("div", Object.assign({ className: "navbar" }, { children: user ?
            _jsx(_Fragment, { children: _jsx(Button, Object.assign({ variant: "contained", style: { textDecoration: "none", color: "white" }, onClick: onLogout }, { children: "Logout" })) })
            :
                _jsxs("div", Object.assign({ className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 } }, { children: [_jsx(Link, Object.assign({ to: '/home' }, { children: "Home" })), _jsx(Link, Object.assign({ to: '/login' }, { children: "Login" })), _jsx(Link, Object.assign({ to: '/signup' }, { children: "Sign Up" }))] })) })));
};
export default Navbar;
