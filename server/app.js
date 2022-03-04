const express = require("express"), cors = require("cors"), routes = require("./routes.js"), mongoose = require("mongoose"), dotenv = require("dotenv");
dotenv.config();

class App {
  constructor(){
    this.server = express();
    mongoose.connect("mongodb://localhost:27017/academiaStrong")
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