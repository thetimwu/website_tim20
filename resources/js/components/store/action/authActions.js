import * as ActionTypes from "./actionTypes";
const axios = require("axios");

export const login_request = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    };
};

export const login_success = (accessToken, user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { accessToken, user }
    };
};

export const login_failure = error => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        payload: {},
        error: { error }
    };
};

// use thunk
export const register_request = () => dispatch => {
    dispatch({
        type: ActionTypes.REGISTER_REQUEST
    });
};

const _register_success = (accessToken, user) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: { accessToken, user }
    };
};

const url_register = `http://tim.test:8080/api/user/register`;
export const register_success = (
    username,
    email,
    password,
    passwordConfirm
) => {
    return async dispatch => {
        try {
            const response = await axios.post(url_register, {
                name: username,
                email: email,
                password: password,
                password_confirmation: passwordConfirm
            });
            if (response.status === 200) {
                console.log(response.data);
                dispatch(
                    _register_success(
                        response.data.accessToken,
                        response.data.user
                    )
                );
            } else {
                console.log(response);
                throw new Error("api calling error!");
            }
        } catch (e) {
            console.error(e);
            dispatch(register_failure(e));
        }
    };
};

export const register_failure = error => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        payload: {},
        error: { error }
    };
};

const _logout_success = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    };
};

// use thunk
const url_logout = `http://tim.test:8080/api/user/logout`;
export const logout_success = id => {
    console.log("logging out...");
    return async dispatch => {
        try {
            const res = await axios.post(url_logout, { userId: id });
            if (res.status === 200) {
                // console.log(res);
                dispatch(_logout_success());
            } else {
                console.log(res);
            }
        } catch (e) {
            console.log(e);
        }
    };
};
