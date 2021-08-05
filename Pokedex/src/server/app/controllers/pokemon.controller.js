const db = require("../models/index");

exports.getAllPokemon=(req,res)=>{
     let query = 'SELECT * FROM Pokedex.pokemon;';
 
     db.query(query, (err, data, fields) => {
         if (err) {
             res.status(500).send({ message: 'error retrieving pokemon' })
         }
         res.send(data)
     })
}
exports.getPictureById=(req,res)=>{
     let id= req.body.id
     console.log('getting  pic from id '+ id )
 
     let query = 'SELECT * FROM Pokedex.pokemon WHERE id=?';
 
     db.query(query, [id], (err, data, fields) => {
         if (err) {
             res.status(500).send({ message: 'error retrieving animals' })
         }
         res.send(data[0].picture)
     })
}
exports.getPokemonById=(req,res)=>{
    let id= req.params.id
    let query= "select * from Pokedex.pokemon where id=?"
    db.query(query,[id],(err,data)=>{
        if(err){
            res.status(500).send({err,message:"error getting pokemon with id:"+ id})
        }else{
            res.status(200).send(data[0])
        }
    })
}
exports.catchPokemon=(req,res)=>{
    let userId= req.body.userId
    let pokemonId= req.body.pokemonId
    let query= "INSERT INTO `Pokedex`.`caughtPokemon` (`userId`, `pokemonId`) VALUES (?, ?);"
    db.query(query,[userId,pokemonId],(err,data)=>{
        if (err){
            res.status(500).send({err,message:"error cathcing pokemon"})
        }else{
            res.status(200).send(data)
        }
    })
}


