import { FC, useState } from 'react';
import { useForm } from "../utilites/hooks";
import { Container, TextField, Button, Stack, Alert } from '@mui/material';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { REGISTER_CAT } from '../graphql/mutations';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { registerNewCat } from '../store/reducers/user';

const NewCat: FC = () => {
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [ errors, setErrors ]: any = useState([]);
  const navigate = useNavigate();

  function registerNewCatCallback() {
    //call the function that creates the mutation
    console.log('running')
    registerCat();
  }

  //lets change this to the a thunk that 
  const { onChange, onSubmit, values } = useForm(registerNewCatCallback, {
    name:'',
    breed:'',
    age: '',
    weight: ''
  })

  const [ registerCat, { loading } ] = useMutation(REGISTER_CAT, {
    update(proxy, { data: { registerCat: catData }}) {
      dispatch(registerNewCat(catData));
      navigate('/');
    },

    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },

    variables: { id: user.id, input: values }
  })
  
  return (
    //@ts-ignore
    <Container spacing={2} maxWidth="sm">
     <h3> Register Cats </h3>
      <Stack spacing={2} paddingBottom={2}>
        <TextField
              label="Name"
              name="name"
              onChange={onChange}
        />
          <TextField
              label="Breed"
              name="breed"
              onChange={onChange}
        />
          <TextField
              label="Age"
              name="age"
              onChange={onChange}
        />
          <TextField
              label="Weight"
              name="weight"
              onChange={onChange}
        />
      </Stack>
      {/*@ts-ignore*/}
      <Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container>
  )
}

export default NewCat;