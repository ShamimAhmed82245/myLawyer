const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

require("./config/db");
require("./models/user");
const authRoutes=require("./routes/authRoutes")
app.use(authRoutes);


app.get("/",(req, res) => {
    res.send("this is home page");
});




module.exports=app;