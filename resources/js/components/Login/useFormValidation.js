import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    login_request,
    login_success,
    login_failure
} from "../store/action/authActions";

// future work --- add firebase authentication
const useFormValidation = (initialState, validate) => {
    const [value, setValue] = useState(initialState);
    const [error, setError] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    // const email = useSelector(state => state.email);
    // const password = useSelector(state => state.password);
    const dispatch = useDispatch();
    const url_login = `http://tim.test:8080/api/user/login`;
    // const url_login = `http://tim.test:8080/oauth/token`;

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

    const makeRequest = useCallback(
        async (email, password) => {
            try {
                const response = await axios.post(url_login, {
                    username: email,
                    password: password
                });

                if (response.status === 200) {
                    console.log(response.data);
                    // dispatch(
                    //     login_success(
                    //         response.data.accessToken,
                    //         response.data.user
                    //     )
                    // );
                } else {
                    console.log(response);
                    throw new Error("api calling error!");
                }
            } catch (e) {
                console.error(e);
                dispatch(login_failure(e));
            }
        },
        [url_login, dispatch]
    );

    const submitHandler = e => {
        e.preventDefault();
        const validationError = validate(value);
        setError(validationError);
        setSubmitting(true);
        dispatch(login_request());
        makeRequest(value.email, value.password);
        // console.log(value);
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

// const mapStateToProps = () => {
//     return {};
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onLogin: loginData =>
//             dispatch({
//                 type: ActionTypes.LOGIN_REQUEST,
//                 payload: loginData
//             })
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(useFormValidation);
export default useFormValidation;
