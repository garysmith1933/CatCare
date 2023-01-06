import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag"
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert } from '@mui/material';

const LOGIN_USER = gql`
mutation LoginUser($loginInput: LoginInput) {
  loginUser(loginInput: $loginInput) {
    email
    username
    token
  }
}
`

const Login = () => {
  let navigate = useNavigate();
  const context = useContext(AuthContext);
  const [ errors, setErrors ] = useState([]);

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
    <Container spacing={2} maxWidth="sm"> 
      <h3>Login Page</h3>
      <p>Login below</p>
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
      {errors.map( function(error) {
        return (
          <Alert severity="error">
            {error.message}
          </Alert>
        )
      })}
      <Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container>
  )
}

export default Login;