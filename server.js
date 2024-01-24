const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const url =
  "https://1c6a2214-0422-431d-927e-52ff187a0c33-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";

const token =
  "AstraCS:LUqmyTcmKenJLUkWSAWvRxld:cc00aeef77383fce41fdea13d8dc07bad886b480431152a0e46845a3f1f69117";

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };
  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
