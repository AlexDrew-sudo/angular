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

require("./app/models/index")
require("./app/routes/users.routes")(app);
require("./app/routes/pokemon.routes")(app)


















const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
