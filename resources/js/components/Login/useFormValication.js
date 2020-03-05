import React, { useState, useEffect } from "react";

const useFormValication = (initialState, validate) => {
    const [value, setValue] = useState(initialState);
    const [error, setError] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noError = Object.keys(error).length === 0;
            if (noError) {
                console.log("useEffect no error: " + value);
                setSubmitting(false);
            } else {
                setSubmitting(false);
                // console.error(error);
            }
        }
    }, [error]);

    const changeHandler = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const blurHandler = () => {
        const validationError = validate(value);
        setError(validationError);
    };

    const submitHandler = e => {
        e.preventDefault();
        const validationError = validate(value);
        setError(validationError);
        setSubmitting(true);
        console.log(value);
        console.log(validationError);
    };

    return {
        changeHandler,
        value,
        submitHandler,
        blurHandler,
        error,
        isSubmitting
    };
};

export default useFormValication;
