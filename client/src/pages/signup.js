import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
const SIGNUP_USER = gql `
  mutation Mutation($userInput: NewUserInput!) {
    createUser(userInput: $userInput) {
      email
      username
      token
      id
    }
}
`;
function Signup() {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    function signupUserCallback() {
        console.log("Callback hit");
        signupUser();
    }
    const { onChange, onSubmit, values } = useForm(signupUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [signupUser, { loading }] = useMutation(SIGNUP_USER, {
        update(proxy, { data: { createUser: userData } }) {
            console.log('we made it');
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { userInput: values }
    });
    return (
    //@ts-ignore
    _jsxs(Container, Object.assign({ spacing: 2, maxWidth: "sm" }, { children: [_jsx("h3", { children: "Register" }), _jsx("p", { children: "Create Account" }), _jsxs(Stack, Object.assign({ spacing: 2, paddingBottom: 2 }, { children: [_jsx(TextField, { label: "Username", name: "username", onChange: onChange }), _jsx(TextField, { label: "Email", name: "email", onChange: onChange }), _jsx(TextField, { label: "Password", name: "password", onChange: onChange }), _jsx(TextField, { label: "Confirm password", name: "confirmPassword", onChange: onChange })] })), errors.map(function (error) {
                return (_jsx(Alert, Object.assign({ severity: "error" }, { children: error.message })));
            }), _jsx(Button, Object.assign({ variant: "contained", onClick: onSubmit }, { children: "Register" }))] })));
}
export default Signup;
