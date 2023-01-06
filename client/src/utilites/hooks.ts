import { useState, ChangeEvent } from 'react'

export const useForm = (callback: Function, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event:ChangeEvent) => {
    let target = event.target as HTMLInputElement;
    setValues({ ...values, [target.name]: target.value});
    console.log(values);
  };

  const onSubmit = (event:SubmitEvent) => {
    event.preventDefault();
    callback();
  }

  return {
    onChange,
    onSubmit,
    values
  }
}
