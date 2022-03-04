const {Router} = require("express"), routes = new Router();
const SessionController = require("./controllers/SessionController");

routes.get("/", SessionController.store);

module.exports = routes;