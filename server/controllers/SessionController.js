const api = require("../services/api"), jwt = require("jsonwebtoken"), JWTSecret = "jadlfjaçdjfija jadlfjaçsf";

class SessionController {
  store(req, res){
    res.json({ok: true})
  }
}

module.exports = new SessionController();