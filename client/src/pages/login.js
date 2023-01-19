import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "../utilites/hooks";
import { useMutation } from "@apollo/react-hooks";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Alert } from '@mui/material';
import Container from '@mui/material/Container';
import { LOGIN_USER } from "../graphql/mutations";
import { login } from "../store/reducers/user";
import { useAppDispatch } from "../store/hooks";
const Login = () => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const dispatch = useAppDispatch();
    function loginUserCallback() {
        loginUser();
    }
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    });
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            dispatch(login(userData));
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { loginInput: values }
    });
    return (
    //@ts-ignore
    _jsxs(Container, { spacing: 2, maxWidth: "sm", children: [_jsx("h3", { children: "Login" }), _jsxs(Stack, { spacing: 2, paddingBottom: 2, children: [_jsx(TextField, { label: "Email", name: "email", onChange: onChange }), _jsx(TextField, { label: "Password", name: "password", onChange: onChange })] }), errors.map(function (error) {
                return (_jsx(Alert, { severity: "error", children: error.message }));
            }), _jsx(Button, { variant: "contained", onClick: onSubmit, children: "Register" })] }));
};
export default Login;
