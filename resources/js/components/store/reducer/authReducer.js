import * as ActionTypes from "../action/actionTypes";

const initState = {
    email: "",
    password: "",
    token: ""
};

const authReducer = (state = initState, action) => {
    const { email, password } = action.payload;
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return state;
    }
    return state;
};

export default authReducer;
