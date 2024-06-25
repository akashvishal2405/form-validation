import React, { useState } from 'react';

const useForm = (validate) => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target

        setValues((prevValue) => {
            return{
                ...prevValue,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(values))
    }


  return {values, handleChange, handleSubmit, errors}
}

export default useForm;