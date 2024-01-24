const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const url = app.listen(PORT, () =>
  console.log(`Server Running on PORT: ${PORT}`)
);
