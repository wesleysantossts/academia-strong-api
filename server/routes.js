const {Router} = require("express"), routes = new Router();
const middlewares = require("./middlewares");
const SessionController = require("./controllers/SessionController");

routes.get("/users", /*middlewares.auth,*/ SessionController.index);
routes.post("/user", SessionController.store);
routes.post("/auth", SessionController.store);

module.exports = routes;