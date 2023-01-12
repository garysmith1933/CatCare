import { FC, useState } from 'react';
import { useContext } from 'react'; 
import { AuthContext } from '../context/authContext';
import { useForm } from "../utilites/hooks";
import { Container, TextField, Button, Stack, Alert } from '@mui/material';

const NewCat: FC = () => {
  const { user }: any = useContext(AuthContext);
  const [ errors, setErrors ]: any = useState([]);

  function registerNewCat() {
    //call the function that creates the mutation
  }

  const { onChange, onSubmit, values } = useForm(registerNewCat, {
    name:'',
    breed:'',
    age: '',
    weight: ''
  })
  
  return (
    //@ts-ignore
    <Container spacing={2} maxWidth="sm">
     <h3> Register Cats </h3>
      <Stack spacing={2} paddingBottom={2}>
        <TextField
              label="name"
              name="name"
              onChange={onChange}
        />
          <TextField
              label="breed"
              name="breed"
              onChange={onChange}
        />
          <TextField
              label="age"
              name="age"
              onChange={onChange}
        />
          <TextField
              label="weight"
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