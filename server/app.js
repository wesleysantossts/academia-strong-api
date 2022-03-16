const express = require("express"), cors = require("cors"), routes = require("./routes.js"), mongoose = require("mongoose");
require("dotenv").config();
const MONGO = process.env.MONGO;


class App {
  constructor(){
    this.server = express();
    mongoose.connect(MONGO)
    .then(()=> console.log("DB conectado."))
    .catch(error => console.log("Erro ao conectar o servidor", error));

    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.server.use(express.urlencoded({extended: false}), express.json(), cors());
  }

  routes(){
    this.server.use(routes)
  }
}

module.exports = new App().server;