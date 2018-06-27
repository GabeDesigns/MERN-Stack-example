const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//mongoDB
const key = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(key)
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// you are at 13:39
