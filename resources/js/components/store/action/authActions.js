import * as ActionTypes from "./actionTypes";

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

export const register_request = () => {
    return {
        type: ActionTypes.REGISTER_REQUEST
    };
};

export const register_success = (accessToken, user) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: { accessToken, user }
    };
};

export const register_failure = error => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        payload: {},
        error: { error }
    };
};

export const logout_success = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    };
};
