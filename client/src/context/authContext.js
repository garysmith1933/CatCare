import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';
const initalState = {
    user: null
};
if (window.localStorage.getItem("token")) {
    const decodedToken = jwtDecode(window.localStorage.getItem("token"));
    //Is it expired?
    if (decodedToken.exp * 1000 < Date.now()) {
        window.localStorage.removeItem("token");
    }
    else {
        initalState.user = decodedToken;
    }
}
const AuthContext = createContext({
    user: null,
    login: (userData) => { },
    logout: () => { },
    registerCat: (id) => { }
});
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
//Will redadjust typing later
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign(Object.assign({}, state), { user: action.payload });
        case 'LOGOUT':
            return Object.assign(Object.assign({}, state), { user: null });
        default:
            return state;
    }
}
const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initalState);
    const login = (userData) => {
        console.log(userData);
        window.localStorage.setItem("token", userData.token);
        dispatch({ type: LOGIN, payload: userData });
    };
    const logout = () => {
        window.localStorage.removeItem("token");
        dispatch({ type: LOGOUT });
    };
    const registerCat = (id) => {
        console.log('you got this far');
    };
    return (_jsx(AuthContext.Provider, Object.assign({ value: { user: state.user, login, logout, registerCat } }, props)));
};
export { AuthContext, AuthProvider };
