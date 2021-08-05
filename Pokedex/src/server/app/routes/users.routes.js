module.exports= (app)=>{
     const users= require("../controllers/users.controller")

     app.get("/api/user/:id", users.getUser)
     app.post("/api/user/create",users.createUser)
     app.post("/api/user/login", users.login) 
     app.get("/api/inventory/berries/:id", users.getBerries)
     app.put("/api/user/pokeballCount", users.updatePokeballs)
     app.get("/api/:id/caughtpokemon", users.getCaughtPokemon)
     app.put("/api/berries/user", users.updateBerries)
     app.put("/api/berries/add", users.addBerries)
     app.put("/api/pokeballs/add", users.addPokeballs)
     app.post("/api/berries/firs",users.firstBerries)
}