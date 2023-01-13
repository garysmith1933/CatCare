import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from "../utilites/hooks";
import { Container, TextField, Button, Stack } from '@mui/material';
import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const REGISTER_CAT = gql `
  mutation registerCat($id: ID!, $input: RegisterAndUpdateCatInput!) {
    registerCat(ID: $id, input: $input) {
      name
      breed
      age
      weight
      owner
    }
}
`;
const NewCat = () => {
    const context = useContext(AuthContext);
    const { user, state } = context;
    const { user_id } = user;
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    console.log(context);
    function registerNewCatCallback() {
        //call the function that creates the mutation
        console.log('running');
        registerCat();
    }
    const { onChange, onSubmit, values } = useForm(registerNewCatCallback, {
        name: '',
        breed: '',
        age: '',
        weight: ''
    });
    const [registerCat, { loading }] = useMutation(REGISTER_CAT, {
        update(proxy, { data: { registerCat: catData } }) {
            context.registerCat(user_id, catData);
            navigate('/');
            console.log(state);
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { id: user_id, input: values }
    });
    return (
    //@ts-ignore
    _jsxs(Container, Object.assign({ spacing: 2, maxWidth: "sm" }, { children: [_jsx("h3", { children: " Register Cats " }), _jsxs(Stack, Object.assign({ spacing: 2, paddingBottom: 2 }, { children: [_jsx(TextField, { label: "Name", name: "name", onChange: onChange }), _jsx(TextField, { label: "Breed", name: "breed", onChange: onChange }), _jsx(TextField, { label: "Age", name: "age", onChange: onChange }), _jsx(TextField, { label: "Weight", name: "weight", onChange: onChange })] })), _jsx(Button, Object.assign({ variant: "contained", onClick: onSubmit }, { children: "Register" }))] })));
};
export default NewCat;
