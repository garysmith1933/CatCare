import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { SIGNUP_USER } from "../graphql/mutations";


function Signup() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [ errors, setErrors ]: any = useState([]);

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
    //@ts-ignore
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
          name="confirmPassword"
          onChange={onChange}
        />
      </Stack>
      {errors.map( function (error: Error) {
        return (
          <Alert severity="error">
            {error.message}
          </Alert>
        )
      })}
      {/*@ts-ignore*/}
      <Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container>
  )
}

export default Signup;