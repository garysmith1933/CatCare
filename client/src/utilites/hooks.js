import { useState } from 'react';
export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const onChange = (event) => {
        let target = event.target;
        setValues({ ...values, [target.name]: target.value });
        console.log(values);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    };
    return {
        onChange,
        onSubmit,
        values
    };
};
