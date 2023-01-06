import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsx("div", Object.assign({ className: "navbar" }, { children: _jsxs("div", Object.assign({ className: "navItems", style: { marginLeft: "1rem", display: "flex", gap: 5 } }, { children: [_jsx(Link, Object.assign({ to: '/home' }, { children: "Home" })), _jsx(Link, Object.assign({ to: '/login' }, { children: "Login" })), _jsx(Link, Object.assign({ to: '/signup' }, { children: "Sign Up" }))] })) })));
};
export default Navbar;
