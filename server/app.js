const express = require("express"), app = express(), cors = require("cors"), routes = require(routes), mongoose = require("mongoose");
require("dotenv").config()

class App {
  constructor(){
    this.server = app;

    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.server.use(express.urlencoded({extended: false}), express.json(), cors());
    this.server.use(mongoose.connect(""))
  }

  routes(){
    this.server.use(routes)
  }
}

module.exports = new App().server;