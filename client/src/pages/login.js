import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Alert } from '@mui/material';
import Container from '@mui/material/Container';
const LOGIN_USER = gql `
mutation LoginUser($loginInput: LoginInput) {
  loginUser(loginInput: $loginInput) {
    email
    username
    token
    id
  }
}
`;
const Login = () => {
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    function loginUserCallback() {
        loginUser();
    }
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    });
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            console.log('we made it');
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { loginInput: values }
    });
    return (
    //@ts-ignore
    _jsxs(Container, Object.assign({ spacing: 2, maxWidth: "sm" }, { children: [_jsx("h3", { children: "Login" }), _jsxs(Stack, Object.assign({ spacing: 2, paddingBottom: 2 }, { children: [_jsx(TextField, { label: "Email", name: "email", onChange: onChange }), _jsx(TextField, { label: "Password", name: "password", onChange: onChange })] })), errors.map(function (error) {
                return (_jsx(Alert, Object.assign({ severity: "error" }, { children: error.message })));
            }), _jsx(Button, Object.assign({ variant: "contained", onClick: onSubmit }, { children: "Register" }))] })));
};
export default Login;
