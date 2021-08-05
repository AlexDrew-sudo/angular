const db = require("../models/index")
const bcrypt = require("bcrypt");
const saltRounds = 10;
exports.login=(req,res)=>{
     let password= req.body.password
     let username= req.body.user
     let query="Select * from users Where UserName=?;"
 
     db.query(query, [username], async(err,data,fields)=>{
         if (err){
             res.status(500).send({message:"error orrcured"})
         }else if( data && data.length==0){
             //empty request 
             res.status(400).send()
             return
         }else{
             const comparison= await bcrypt.compare(password,data[0].password)
             console.log(comparison)
             if(comparison==true){
                 res.status(200).send(data)
         
             } else{
                 res.status(204).send()
             }
 
         }
     })
}
exports.getUser = (req, res) => {
     let id = req.params.id
     let query = "select * from users WHERE id=?"
     db.query(query, [id], (err, data) => {
          if (err) {
               res.status(500).send({ err: err, message: "error getting user with id " + id })
          } else {
               res.status(200).send(data)
          }
     })
}
exports.createUser = async (req, res) => {
     let password = await bcrypt.hash(req.body.password, saltRounds)
     let user = req.body.user
     let query = "INSERT INTO `Pokedex`.`users`(`password`,`username`)VALUES(?,?);"


     db.query(query, [password, user], (err, data, fields) => {
          if (err) {
               console.log(err)
               res.status(500).send({ message: "couldnt create user" })
          } else {
               res.send(data)
               console.log(data)
          }
     })
}
// exports.login = (req, res) => {
//      let password = req.body.password
//      let username = req.body.user
//      let query = "Select * from users Where UserName=?;"

//      db.query(query, [username], async (err, data, fields) => {
//           if (err) {
//                res.status(500).send({ message: "error orrcured" })
//           } else if (data && data.length == 0) {
//                //empty request 
//                res.status(400).send({ message: "Username not found" })
//                return
//           } else {
//                const comparison = await bcrypt.compare(password, data[0].password)
//                if (comparison) {
//                     console.log("it worked")
//                     res.send(data)


//                } else {
//                     res.status(500).send({ message: "passord doesnt match" })
//                }

//           }
//      })
// }
exports.getBerries = (req, res) => {
     let id = req.params.id
     console.log(id)
     let query = "select * from Pokedex.inventoryItems where userId = ?"

     db.query(query, [id], (err, data) => {
          if (err) {
               res.status(500).send({ err, message: "error getting num of berries" })
          } else if (data.length == 0) {
               res.send(data)
          } else {
               quantity = data[0].quantity
               res.status(200).send({ quantity })
          }
     })
}
exports.updatePokeballs = (req, res) => {
     let pokeballCount = req.body.pokeballCount
     let userId = req.body.userId
     let query = "UPDATE `Pokedex`.`users` SET `pokeballCount` = ? WHERE `id` = ?;"
     db.query(query, [pokeballCount, userId], (err, data) => {
          if (err) {
               res.status(500).send({ err, message: "error updating pokeball count" })
          } else {
               res.status(200).send(data)
          }
     })
}
exports.getCaughtPokemon = (req, res) => {
     let id = req.params.id
     let caughtPokemon = []
     let query = "SELECT distinct pokemonId FROM Pokedex.caughtPokemon where userId=?;"
     db.query(query, [id], (err, data) => {
          if (err) {
               res.send({ err, message: "error getting caught pokemon for user id " })
          } else {
               for (let i = 0; i < data.length; i++) {
                    caughtPokemon.push(data[i].pokemonId)
                    if (caughtPokemon.length == data.length) {
                         res.send(caughtPokemon)
                    }
               }

          }
     })
}
exports.updateBerries = (req, res) => {
     id = req.body.userId
   
     query = "UPDATE `Pokedex`.`inventoryItems` SET `quantity` = `quantity`+5 WHERE `userId` = ?;"
     db.query(query, [id], (err, data) => {
          if (err) {
               res.status(500).send({ err, message: "unable to update berry count " })
          } else {
               res.status(200).send(data)
          }
     })
}
exports.addBerries = (req, res) => {
     let id = req.body.id
     let amount = req.body.amount
     let query = "UPDATE `Pokedex`.`inventoryItems` SET `quantity` = ? WHERE `userId` = ?;"
     db.query(query, [amount, id], (err, data) => {
          if (err) {
               res.status(500).send({ err, message: "unable to add to berry count" })
          } else {
               res.status(200).send(data)
          }
     })
}
exports.addPokeballs = (req, res) => {
     let id = req.body.id
     let amount = req.body.amount
     let query="UPDATE `Pokedex`.`users` SET `pokeballCount` =? WHERE `id` = ?;"
     db.query(query, [amount, id],(err, data)=>{
          if (err){
               res.status(500).send({err, message:"unable to add pokeballs"})
          }else{
               res.status(200).send(data)
          }
     })

}
exports.firstBerries=( req,res)=>{
     let id= req.body.id
     let query="INSERT INTO `Pokedex`.`inventoryItems` (`userId`, `quantity`)VALUES (?,5);"
db.query(query,[id], (err, data)=>{
     if(err){
          res.status(500).send({err, message:"error adding first berries"})
     }else{
          res.status(200).send(data)
     }
})
}