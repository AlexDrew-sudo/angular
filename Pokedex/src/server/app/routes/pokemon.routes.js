module.exports= (app)=>{
     const pokemon = require("../controllers/pokemon.controller")
     app.get("/api/pokemon", pokemon.getAllPokemon);
     app.post("/api/picture", pokemon.getPictureById);
     app.get("/api/pokemon/:id", pokemon.getPokemonById);
     app.post("/api/catch/pokemon", pokemon.catchPokemon);
     

}