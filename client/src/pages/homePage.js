import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
const Homepage = () => {
    const { user } = useContext(AuthContext);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: " This is the homepage " }), user ?
                _jsxs("p", { children: [" Welcome ", user.email, " "] })
                :
                    _jsx("p", { children: "There is no user currenly logged in" })] }));
};
export default Homepage;
