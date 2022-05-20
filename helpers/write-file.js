const fs = require("fs");
module.exports = (path, data) => {
    fs.writeFileSync(path, data);
};