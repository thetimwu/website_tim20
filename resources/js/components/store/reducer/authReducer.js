import * as ActionTypes from "../action/actionTypes";

const initState = {
    accessToken: "",
    user: null,
    isLogin: false,
    loading: false,
    error: ""
};

const authReducer = (state = initState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                user: payload.user,
                isLogin: true,
                loading: false
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: error,
                loading: false
            };
        case ActionTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                user: payload.user,
                isLogin: true,
                loading: false
            };
        case ActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                error: error,
                loading: false
            };
        default:
            return state;
    }
    return state;
};

export default authReducer;
