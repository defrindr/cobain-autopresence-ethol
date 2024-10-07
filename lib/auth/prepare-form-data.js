const Config = require("../../config");

module.exports = async (data) => {
  let credentials = Config.ethol;
  let username = credentials.email;
  let password = credentials.password;
  if (!data) {
    throw new Error("Invalid to parse Form Login");
  }
  let form = data.split("<form")[1].split("</form>")[0];
  let formData = form
    .split("<input")
    .map((item) => {
      // validate if item not contain attribute name
      if (item.split('name="').length > 1 && item.split('value="').length > 1) {
        let name = item.split('name="')[1].split('"')[0];
        let value = item.split('value="')[1].split('"')[0];
        return { name, value };
      }
    })
    .reduce((acc, curr) => {
      if (curr !== undefined && acc !== undefined) {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});
  formData.username = username;
  formData.password = password;
  return formData;
};
