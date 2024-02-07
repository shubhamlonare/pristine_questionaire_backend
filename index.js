const express =  require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const connectDb = require('./config/dbConnections')
const {authenticateUser} = require(`./middleware/authentication`)
var cors = require('cors')

 

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use("/api/user", require("./routes/loginRoutes") )
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port,(req,res)=>{
    console.log(port)
});
