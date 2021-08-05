const dbConfig=require("../config/db.config")
const mysql= require("mysql")
const connection = mysql.createConnection({
     host: dbConfig.host,
     user: dbConfig.user,
     password: dbConfig.password,
     database: dbConfig.database
});
connection.connect((err) => {
     if (err) {
          throw err
     } else {
          console.log("connected to database")
     }
})
module.exports=connection;