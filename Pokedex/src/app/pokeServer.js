const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


const mysql = require('mysql');
const bcrypt = require("bcrypt");
const saltRounds = 10;



const app = express();
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gandalf1?',
    database: 'Pokedex'
});
db.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log("connected to database")
    }
})

app.post("/api/picture", (req, res) => {// get pokemon picture url from id format for request is {id: insetIdHere}
     let id= req.body.id
    console.log('getting  pic from id '+ id )

    let query = 'SELECT * FROM Pokedex.pokemon WHERE id=?';

    db.query(query, [id], (err, data, fields) => {
        if (err) {
            res.status(500).send({ message: 'error retrieving animals' })
        }
        res.send(data[0].picture)
    })

})

app.get("/api/pokemon", (req, res) => {// get all pokemon
     console.log('getting pokemon')
 
     let query = 'SELECT * FROM Pokedex.pokemon;';
 
     db.query(query, (err, data, fields) => {
         if (err) {
             res.status(500).send({ message: 'error retrieving pokemon' })
         }
         res.send(data)
     })
 
 })

 app.post("/api/user/create", async(req,res)=>{
let password= await bcrypt.hash(req.body.password, saltRounds)
let user= req.body.user
let query= "INSERT INTO `Pokedex`.`users`(`password`,`username`)VALUES(?,?);"


db.query(query, [password, user], (err,data,fields)=>{
    if(err) {
        console.log(err)
        res.status(500).send({message:"couldnt create user"})
    } else{
        res.send(data)
        console.log(data)
    }
})
 })
 app.post("/api/user/login" ,(req,res)=>{
    let password= req.body.password
    let username= req.body.user
    let query="Select * from users Where UserName=?;"

    db.query(query, [username], async(err,data,fields)=>{
        if (err){
            res.status(500).send({message:"error orrcured"})
        }else if( data && data.length==0){
            //empty request 
            res.status(400).send({message:"Username not found"})
            return
        }else{
            const comparison= await bcrypt.compare(password,data[0].password)
            if(comparison){
                  console.log("it worked")
                res.send(data)
              
        
            } else{
                res.status(204).send({message:"passord doesnt match"})
            }

        }
    })



 

})











const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
