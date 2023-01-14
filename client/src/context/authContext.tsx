import { useReducer, createContext, FC, PropsWithChildren} from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';

type UserData = {
  email: string
  password: string
  token: string
}

type CatData = {
  name: string,
  breed: string,
  age: string,
  weight: string
}

//we lose the user data from our dispatch on refresh and replaced with this. find a way to seperate the token from the user
const initalState: {
  //may need to adjust this.
  token: JwtPayload | null
  user: null | UserData,
  cats: CatData[]
} = {
  token: null,
  user: null,
  cats: []
}

type State = {
  user: UserData,
  cats: CatData[]
}

if (window.localStorage.getItem("token")) {
  const decodedToken = jwtDecode<JwtPayload>(window.localStorage.getItem("token")!);

  //Is it expired?
  if (decodedToken.exp! * 1000 < Date.now()) {
    window.localStorage.removeItem("token");
  }

  else {
    initalState.token = decodedToken;  
  }
}

const AuthContext = createContext({
  user: null,
  cats: [],
  login: (userData: UserData) => {},
  logout: () => {},
  registerCat: (id: string, catData: CatData) => {}
});

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER_CAT = 'REGISTER_CAT'

//Will redadjust typing later
function authReducer(state: State, action: any) {
  switch(action.type) {
    case LOGIN: 
      return {
        ...state,
        user: action.payload
      }

    case LOGOUT: 
    return {
      ...state,
      user: null
    }

    case REGISTER_CAT: {
      //this shows, yet the state does not update with the cat data
      console.log('here we are', action.payload)
      return {
        ...state,
        cats: [...state.cats, action.payload]
      }
    }

    default: 
      return state;
  }
}


const AuthProvider: FC<PropsWithChildren> = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initalState);

  const login = (userData: UserData) => {
    window.localStorage.setItem("token", userData.token);
    dispatch({type:LOGIN, payload: userData});
  }

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch({ type:LOGOUT })
  }

  const registerCat = (id: string, catData: CatData) => {
    console.log(catData)
    dispatch({type: REGISTER_CAT, payload:{...catData}});
  }

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout, registerCat, state}}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider };