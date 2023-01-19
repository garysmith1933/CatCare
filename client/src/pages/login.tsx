import { useState } from "react";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Alert } from '@mui/material';
import Container from '@mui/material/Container'
import { LOGIN_USER } from "../graphql/mutations";
import { login } from "../store/reducers/user";
import { useAppDispatch } from "../store/hooks";

const Login = () => {
  let navigate = useNavigate();
  const [ errors, setErrors ]: any = useState([]);
  const dispatch = useAppDispatch();

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  })

  const [ loginUser, { loading } ] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData }}) {
      console.log('we made it', userData)
      //thunk
      dispatch(login(userData));
      navigate('/');
    },

    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },

    variables: { loginInput: values }
  })

  return (
     //@ts-ignore
      <Container spacing={2} maxWidth="sm"> 
        <h3>Login</h3>
        <Stack spacing={2} paddingBottom={2}>
          <TextField
            label="Email"
            name="email"
            onChange={onChange}
          />
          <TextField
            label="Password"
            name="password"
            onChange={onChange}
          />
        </Stack>
        {errors.map( function (error: Error) {
          return (
            <Alert severity="error">
              {error.message}
            </Alert>
          )
        }) }
        {/*@ts-ignore*/}
        <Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container> 
  )
}

export default Login;