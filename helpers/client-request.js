const { default: axios } = require("axios");
const { CookieJar } = require("tough-cookie");
const { wrapper } = require("axios-cookiejar-support");

const jar = new CookieJar();
let client = wrapper(axios.create({ jar }));

module.exports = client;
