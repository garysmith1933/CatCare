import { useReducer, createContext } from 'react'
import jwtDecode from 'jwt-decode';

const initalState = {
  user: null
}

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
  login: (userData) => {},
  logout: () => {},
});

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

function authReducer(state, action) {
  switch(action.type) {
    case 'LOGIN': 
      return {
        ...state,
        user: action.payload
      }

    case 'LOGOUT': 
    return {
      ...state,
      user: null
    }

    default: 
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initalState);

  const login = (userData) => {
    console.log(userData)
    window.localStorage.setItem("token", userData.token);
    dispatch({type:LOGIN, payload: userData});
  }

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch({ type:LOGOUT })
  }

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout}}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider };