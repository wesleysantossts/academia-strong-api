const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
})

module.exports = api;