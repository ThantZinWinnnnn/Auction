const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes/user.route");
const productRouter = require("./routes/PostRoutes/product.route");
const commentRouter = require("./routes/PostRoutes/comment.route");
const bidProductRouter = require("./routes/BidRoutes/bidProduct.route");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/products/comment", commentRouter);
app.use("/api/products/auction", bidProductRouter);

app.get("/", (req, res) => {
  res.send("Hi I am testing");
});

//to change port in env file
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
