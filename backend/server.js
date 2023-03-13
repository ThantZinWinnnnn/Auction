const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/userRoutes/userRoute')
const postRouter = require('./routes/PostRoutes/post.route')

 
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie parser
app.use(cookieParser())
app.use('/api/user',userRouter)
app.use('/api/post',postRouter)



app.get("/", (req, res) => {
  res.send("Hi I am testing");
});

//to change port in env file
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
