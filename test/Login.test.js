const app = require("../server/app.js"), supertest = require("supertest"), request = supertest(app);
const mainUser = {nome: "Wesley", email: "teste@teste.com.br", senha: "adjfljsdjfal", dataEntrada: Date.now(), usuarioAtivo: true};

beforeAll(()=>{
  return request.post("/user").send(mainUser)
  .then(res =>{})
  .catch(error =>{})
});

afterAll(()=>{
  return request.delete()
});

describe("Autenticação do login de usuário", ()=>{
})