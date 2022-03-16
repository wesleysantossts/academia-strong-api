const bcrypt = require("bcrypt"), jwt = require("jsonwebtoken"), UserModel = require("../models/UserModel");
require("dotenv").config();
const JWTSecret = process.env.JWTSECRET;

class SessionController {
  async index(req, res){
    let users = await UserModel.find({})
    
    if(!users){
      res.json({message: "NENHUM USUÁRIO CADASTRADO"})
      res.sendStatus(400);
    }

    try {
      users.forEach((item)=> res.json(item))

    } catch (error) {
      res.json({message: "ERRO AO LISTAR USUÁRIOS", error: error})
      res.sendStatus(400);
    }
  }; 

  // SignOut
  async store(req, res){
    let {nome, email, senha} = req.body;
    
    if(!nome && !email && !senha){
      res.sendStatus(400);
      res.json({message: "Algum dado não foi inserido. Tente novamente."})      
    }

    try {
      let userEmail = await UserModel.findOne({"email": email});
      if(userEmail){
        res.sendStatus(400);
        res.json({error: "E-mail já cadastrado!"});
        return
      }

      let salt = await bcrypt.genSalt(10), hash = await bcrypt.hash(senha, salt);

      let user = await UserModel.create({
        nome,
        email,
        senha: hash,
        dataEntrada: Date.now(),
        cadastroAtivo: true
      })

      res.json({ok: "Usuário cadastrado com sucesso"})

    } catch(error){
      res.sendStatus(500);
      res.json({error: "Dados inseridos, mas houve um erro na criação do usuário."})
    }
  };

  // SignIn
  async auth(req, res){
    const {email, senha} = req.body;

    if(!email && !senha){
      res.sendStatus(400)
      res.json({error: "Usuário ou senha incorretos. Tente novamente."})
      return
    }

    const user = await UserModel.find((item)=> item.email === email)
    if(user !== undefined){

      if(user.senha === senha){

        // Gerando o token
        jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: "48h"}, (err, token)=>{
          if(err){
            res.sendStatus(400);
            res.json({error: "Falha interna."});
          } else{
            res.status(200);
            res.json({token: token});
            localStorage.setItem("token", token)
          }
        });
      } else {
        res.status(401);
        res.json({error: "Senha inválida"});
      }
    } else {
      res.sendStatus(404);
      res.json({error: "E-mail não localizado."});
    }
  }
}

module.exports = new SessionController();