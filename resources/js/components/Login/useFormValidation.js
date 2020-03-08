import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/action/actionTypes";

// future work --- add firebase authentication
const useFormValidation = (initialState, validate) => {
    const [value, setValue] = useState(initialState);
    const [error, setError] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noError = Object.keys(error).length === 0;
            if (noError) {
                setSubmitting(true);
            } else {
                setSubmitting(false);
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

        if (
            Object.entries(validationError).length === 0 &&
            validationError.constructor === Object
        ) {
            setSubmitting(true);
            setError({});
        }
        // else if (
        //     !!value["email"].length &&
        //     validationError.password === "Required"
        // ) {
        //     validationError.password = undefined;
        //     setError(validationError);
        // }
        else {
            setError(validationError);
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        const validationError = validate(value);
        setError(validationError);
        setSubmitting(true);
        this.props.onLogin(value);
        console.log(value);
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

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: loginData =>
            dispatch({
                type: ActionTypes.LOGIN_REQUEST,
                payload: loginData
            })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(useFormValidation);
