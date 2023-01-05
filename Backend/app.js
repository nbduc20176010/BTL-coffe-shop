const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const userRouter = require("./routers/user");
<<<<<<< HEAD
const productRouter = require("./routers/drink");
const tableRouter  = require("./routers/table");
=======
const authRouter = require("./routers/auth");
const productRouter = require("./routers/product");
const tableRouter = require("./routers/table");
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
const orderRouter = require("./routers/order");

mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("db connect success");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/table", tableRouter);
app.use("/api/product", productRouter);
app.use("/api/table",tableRouter)
app.listen(process.env.PORT || 5000, () => {
    console.log("app running");
});
