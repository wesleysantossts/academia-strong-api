const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:8181",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})

module.exports = api;