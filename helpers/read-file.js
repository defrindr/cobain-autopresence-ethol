const fs = require("fs");

module.exports = (path) => {
  let data = fs.readFileSync(path);
  return data.toString();
};
