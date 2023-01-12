import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from "../utilites/hooks";
import { Container, TextField, Button, Stack } from '@mui/material';
const NewCat = () => {
    const { user } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    function registerNewCat() {
        //call the function that creates the mutation
    }
    const { onChange, onSubmit, values } = useForm(registerNewCat, {
        name: '',
        breed: '',
        age: '',
        weight: ''
    });
    return (
    //@ts-ignore
    _jsxs(Container, Object.assign({ spacing: 2, maxWidth: "sm" }, { children: [_jsx("h3", { children: " Register Cats " }), _jsxs(Stack, Object.assign({ spacing: 2, paddingBottom: 2 }, { children: [_jsx(TextField, { label: "Name", name: "name", onChange: onChange }), _jsx(TextField, { label: "Breed", name: "breed", onChange: onChange }), _jsx(TextField, { label: "Age", name: "age", onChange: onChange }), _jsx(TextField, { label: "Weight", name: "weight", onChange: onChange })] })), _jsx(Button, Object.assign({ variant: "contained", onClick: onSubmit }, { children: "Register" }))] })));
};
export default NewCat;
