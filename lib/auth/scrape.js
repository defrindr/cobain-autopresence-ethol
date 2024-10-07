const Config = require("../../config");
const { ErrorHelper } = require("../../helpers");

module.exports = async (ClientRequest) => {
  let options = {
    url: Config.url.URL_LOGIN,
    method: "GET",
    withCredentials: true,
  };

  // request with axios asynchronously
  try {
    let response = await ClientRequest(options);
    return response.data;
  } catch (error) {
    ErrorHelper(error);
    return;
  }
};
