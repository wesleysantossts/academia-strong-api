const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:8181"
})

module.exports = api;