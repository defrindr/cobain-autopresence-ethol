const Config = require("../../config");
const { ErrorHelper } = require("../../helpers");

module.exports = async(ClientRequest, token) => {
    let headers = {
        token,
    };

    let options = {
        url: Config.url.URL_CEK_NOTIF,
        method: "GET",
        headers,
        withCredentials: true,
    };

    // request with axios asynchronously
    try {
        let response = await ClientRequest(options);
        if (response.data.hasOwnProperty("jumlah")) {
            return true;
        }
        return false;
    } catch (error) {
        ErrorHelper(error);
        return;
    }
};