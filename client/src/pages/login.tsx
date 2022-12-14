import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag"
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Alert } from '@mui/material';
import Container from '@mui/material/Container'

const LOGIN_USER = gql`
mutation LoginUser($loginInput: LoginInput) {
  loginUser(loginInput: $loginInput) {
    email
    username
    token
    id
  }
}
`

const Login = () => {
  let navigate = useNavigate();
  const context = useContext(AuthContext);
  const [ errors, setErrors ]: any = useState([]);

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  })


  const [ loginUser, { loading } ] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData }}) {
      console.log('we made it')
      context.login(userData);
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