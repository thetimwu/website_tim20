const axios = require("axios");

const makeApiRequest = async (endpoint, { verb = "get", params = {} }) => {
    try {
        const res = await axios[verb](endpoint, params);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export default makeApiRequest;
