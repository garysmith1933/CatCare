import { useState } from 'react';
export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    //need to change out typing, any is just a placeholder
    const onChange = (event) => {
        let target = event.target;
        setValues(Object.assign(Object.assign({}, values), { [target.name]: target.value }));
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
