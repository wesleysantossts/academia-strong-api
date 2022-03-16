const express = require("express"), app = express(), jwt = require("jsonwebtoken");
require("dotenv").config();
let JWTSecret = process.env.JWTSECRET;

class Middlewares {

  // Conferindo o token
  auth(req, res, next){
  
    const authToken = req.headers.authorization;
  
    if(authToken){
      const [ ,token ] = authToken.split(" ");
    
      jwt.verify(token, JWTSecret, (data, error)=>{
        if(data){
          req.token = token;
          req.loggedUser = {nome: data.nome, email: data.email};
          return next()
        }
    
        res.sendStatus(401);
        res.json({error: "Token inválido!"})
        return
      })
    }
    
    res.status(400);
    res.json({error: "Insira um token válido."});
    return
  } 
  
}

module.exports = new Middlewares();