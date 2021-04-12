import React, { useState, useEffect } from 'react'

export default function useForm(initField, validate) {

    const [values, setValues] = useState(initField);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        const fieldValue = { [name]: value }
        setValues({ ...values, ...fieldValue });
        validate(fieldValue);
    }

    return { values, setValues, errors, setErrors, handleInputChange };
}
