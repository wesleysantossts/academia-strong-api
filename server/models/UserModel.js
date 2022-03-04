const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  dataEntrada: Date,
  cadastroAtivo: Boolean
});

module.exports = mongoose.model("users", UserModel);