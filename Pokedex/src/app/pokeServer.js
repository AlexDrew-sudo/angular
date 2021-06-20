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











const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
