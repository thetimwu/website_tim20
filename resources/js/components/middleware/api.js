import { url_register } from "./constant";

const axios = require("axios");

const callApi = (config = { method: "get" }) => {
    return axios(config);
};

const api = (url, data = { method: "get" }) => {
    // return (  );
};

export default api;
