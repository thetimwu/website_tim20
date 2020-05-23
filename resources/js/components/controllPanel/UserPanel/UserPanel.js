import React, { useEffect } from "react";
import Register from "./Register";
import { useSelector } from "react-redux";

const axios = require("axios");

const UserPanel = () => {
    const accessToken = useSelector(state => state.authReducer.accessToken);
    const instance = axios.create({
        baseURL: "http://tim.test:8080",
        timeout: 1000,
        headers: { Authorization: "Bearer " + accessToken }
    });
    // const bodyParameters = {
    //     key: "value"
    // };
    // const config = {

    // };
    useEffect(() => {
        // console.log(accessToken);
        instance
            .get("/oauth/clients")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ marginTop: 100 }}>
            <Register />
        </div>
    );
};

export default UserPanel;
