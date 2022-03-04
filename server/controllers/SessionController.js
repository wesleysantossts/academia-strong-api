const api = require("../services/api");

class SessionController {
  Login(req, res){
    res.json({ok: true})
  }
}

module.exports = new SessionController();