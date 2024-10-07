const fs = require("fs");
const writeFile = require("../helpers/write-file");

//  eslint-disable-next-line
let BASE_PATH = __dirname.substring(0, __dirname.length - 6);

let TOKEN_PATH = (email) => {
  let path = `${BASE_PATH}/temp/token-${email}.txt`;

  // if file not exist create it
  if (!fs.existsSync(path)) {
    // make file
    writeFile(path, "");
  }
  return path;
};
let ETHOL_CONF_PATH = (email) => {
  let path = `${BASE_PATH}/temp/ethol-${email}.js`;

  // if file not exist create it
  if (!fs.existsSync(path)) {
    // make file
    writeFile(path, "");
  }
  return path;
};

let CREDENTIALS_PATH = BASE_PATH + "/credentials.json";
let DEBUG_PATH = BASE_PATH + "/temp/debug.log";

module.exports = {
  BASE_PATH,
  TOKEN_PATH,
  CREDENTIALS_PATH,
  ETHOL_CONF_PATH,
  DEBUG_PATH,
};
