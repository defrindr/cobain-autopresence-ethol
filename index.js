const express = require("express");
const Config = require("./config/index.js");
const { Presence } = require("./lib/actions");
const { ClientRequest } = require("./helpers");
const app = express();

app.use(express.json());

app.post("/auto-login", async (req, res) => {
  const { email = "", password = "" } = req.body;

  if (!email || !password) {
    return res.status(400).send({ status: "Invalid email or password" });
  }

  Config.ethol.email = email;
  Config.ethol.password = password;
  Config.whatsapp.enable = false;

  try {
    let success_presence = await Presence(ClientRequest);
    return res
      .status(200)
      .send({
        status: "Berhasil melakukan pengecekan",
        details: success_presence,
      });
  } catch (error) {
    return res.status(400).send({ status: error.message });
  }
});

app.listen(3000);
