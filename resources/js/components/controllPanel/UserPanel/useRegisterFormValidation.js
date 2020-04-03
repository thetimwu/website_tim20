import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    register_request,
    register_success,
    register_failure
} from "../../store/action/authActions";

const useRegisterFormValidation = (initialState, validateAuth) => {
    const [signUpUser, setUser] = useState({
        initialState
    });
    const [isSubmitted, setSubmitted] = useState(false);
    const [errors, setError] = useState({});
    const dispatch = useDispatch();
    const url_signup = `http://tim.test:8080/api/user/register`;

    const changeHandler = e => {
        setUser({
            ...signUpUser,
            [e.target.id]: e.target.value
        });
    };

    useEffect(() => {
        if (isSubmitted) {
            const noError = Object.keys(errors).length === 0;
            if (noError) {
                setSubmitted(true);
            } else {
                setSubmitted(false);
            }
        }
    }, [errors]);

    const blurHandler = e => {
        setError(validateAuth(signUpUser));

        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            setSubmitted(true);
        }
    };

    // const makeRequest = useCallback(
    //     async (username, email, password, passwordConfirm) => {
    //         try {
    //             const response = await axios.post(url_signup, {
    //                 name: username,
    //                 email: email,
    //                 password: password,
    //                 password_confirmation: passwordConfirm
    //             });

    //             if (response.status === 200) {
    //                 console.log(response.data);
    //                 dispatch(
    //                     register_success(
    //                         response.data.accessToken,
    //                         response.data.user
    //                     )
    //                 );
    //             } else {
    //                 console.log(response);
    //                 throw new Error("api calling error!");
    //             }
    //         } catch (e) {
    //             console.error(e);
    //             dispatch(register_failure(e));
    //         }
    //     },
    //     [url_signup, dispatch]
    // );

    const makeRequest = useCallback(
        (username, email, password, passwordConfirm) => {
            dispatch(
                register_success(username, email, password, passwordConfirm)
            );
        },
        [url_signup, dispatch]
    );

    const submitHandler = e => {
        e.preventDefault();
        setError(validateAuth(signUpUser));
        setSubmitted(true);
        dispatch(register_request());

        const username = signUpUser.firstName + " " + signUpUser.lastName;

        makeRequest(
            username,
            signUpUser.email,
            signUpUser.password,
            signUpUser.passwordConfirm
        );
    };

    return [changeHandler, submitHandler, blurHandler, isSubmitted, errors];
};

export default useRegisterFormValidation;
