const fs = require("fs");
const writeFile = require("../helpers/write-file");
const process = require("node:process");
let BASE_PATH = process.cwd() + "/";

let TOKEN_PATH = (email) => {
  let path = `./temp/token-${email}.txt`;

  // if file not exist create it
  if (!fs.existsSync(path)) {
    // make file
    writeFile(path, "");
  }
  return path;
};
let ETHOL_CONF_PATH = (email) => {
  let path = `./temp/ethol-${email}.js`;

  // if file not exist create it
  if (!fs.existsSync(path)) {
    // make file
    writeFile(path, "");
  }
  return path;
};
let CREDENTIALS_PATH = "./credentials.json";
let DEBUG_PATH = "./temp/debug.log";

module.exports = {
  BASE_PATH,
  TOKEN_PATH,
  CREDENTIALS_PATH,
  ETHOL_CONF_PATH,
  DEBUG_PATH,
};
