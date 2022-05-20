const PATH = require("./file");
const URLS = require("./urls");
const HEADER = require("./header");

module.exports = {
    ethol: require(PATH.BASE_PATH + "./credentials.js"),
    whatsapp: require(PATH.BASE_PATH + "./whatsapp.js"),
    path: PATH,
    url: URLS,
    header: HEADER,
}