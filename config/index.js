const PATH = require("./file");
const URLS = require("./urls");
const HEADER = require("./header");

const myconf = require(PATH.BASE_PATH + "./credentials.js");
module.exports = {
    ethol: myconf.ethol,
    whatsapp: myconf.whatsapp,
    path: PATH,
    url: URLS,
    header: HEADER,
}