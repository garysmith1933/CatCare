import { FormEvent } from 'react';
import { useState } from 'react'

export const useForm = (callback: Function, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  //need to change out typing, any is just a placeholder
  const onChange = (event:any) => {
    setValues({ ...values, [event.target.name]: event.target.value});
    console.log(values);
  };

  const onSubmit = (event:any) => {
    event.preventDefault();
    callback();
  }

  return {
    onChange,
    onSubmit,
    values
  }
}
