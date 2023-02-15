const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const drinkRouter = require("./routers/drink");
const storeRouter = require("./routers/store");
const tableRouter = require("./routers/table");
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
app.use("/api/order", orderRouter);
app.use("/api/drink", drinkRouter);
app.use("/api/store", storeRouter);
app.use("/api/table", tableRouter);
app.use(express.static("uploads"));

app.listen(process.env.PORT || 5000, () => {
    console.log("app running");
});
