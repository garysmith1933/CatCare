import { useReducer, createContext, FC, PropsWithChildren} from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';

type UserData = {
  email: string
  password: string
  token: string
}

const initalState: {
  user: null | JwtPayload
} = {
  user: null
}

type State = {
  user: UserData
}

if (window.localStorage.getItem("token")) {
  const decodedToken = jwtDecode<JwtPayload>(window.localStorage.getItem("token")!);

  //Is it expired?
  if (decodedToken.exp! * 1000 < Date.now()) {
    window.localStorage.removeItem("token");
  }

  else {
    initalState.user = decodedToken;  
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: UserData) => {},
  logout: () => {},
  registerCat: (id: string) => {}
});

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

//Will redadjust typing later
function authReducer(state: State, action: any) {
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


const AuthProvider: FC<PropsWithChildren> = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initalState);

  const login = (userData: UserData) => {
    console.log(userData)
    window.localStorage.setItem("token", userData.token);
    dispatch({type:LOGIN, payload: userData});
  }

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch({ type:LOGOUT })
  }

  const registerCat = (id: string) => {
    console.log('you got this far')
  }

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout, registerCat}}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider };