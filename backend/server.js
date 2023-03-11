const express = require("express");
const cookieParser = require("cookie-parser");

 
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie parser
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hi I am testing");
});

//to change port in env file
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
