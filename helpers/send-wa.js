const ClientRequest = require("./client-request");
const Config = require("../config");
let options = {
  method: "post",
  url: Config.whatsapp.url,
  headers: {
    "Content-Type": "application/json",
  },
  data: null,
};

module.exports = async (d) => {
  try {
    options.data = JSON.stringify({
      target: Config.whatsapp.phone + "@s.whatsapp.net",
      args: {
        text: d,
      },
    });

    let response = await ClientRequest(options);
    console.log(response.data);
    // eslint-disable-next-line
  } catch (error) {
    return;
  }
};
