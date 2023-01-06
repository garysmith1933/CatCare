import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag"
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert } from '@mui/material';

const SIGNUP_USER =  gql `
  mutation Mutation($userInput: NewUserInput!) {
    createUser(userInput: $userInput) {
      email
      username
      token
    }
}
`

function Signup() {
  const context = useContext(AuthProvider);
  let navigate = useNavigate();
  const [ errors, setErrors ] = useState([]);

  function signupUserCallback() {
    console.log("Callback hit");
    signupUser();
  }

  const { onChange, onSubmit, values } = useForm(signupUserCallback, {
    username: '',
    email:'',
    password:'',
    confirmPassword: ''
  })

  const [ signupUser, { loading } ] = useMutation(SIGNUP_USER, {
    update(proxy, { data: { createUser: userData }}) {
      console.log('we made it')
      context.login(userData);
      navigate('/');
    },

    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },

    variables: { userInput: values }
  })

  return (
    <Container spacing={2} maxWidth="sm"> 
      <h3>Register</h3>
      <p>Create Account</p>
      <Stack spacing={2} paddingBottom={2}>
        <TextField
          label="Username"
          name="username"
          onChange={onChange}
        />
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
         <TextField
          label="Confirm password"
          name="confirm password"
          onChange={onChange}
        />
      </Stack>
      {errors.map(function(error){
        return (
          <Alert severity="error">
            {error.message}
          </Alert>
        )
      })}<Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container>
  )
}

export default Signup;