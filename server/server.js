const app = require("./app"), dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}...`))