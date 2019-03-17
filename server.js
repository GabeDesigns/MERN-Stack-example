const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

// MongoDB URL
const db = require("./config/keys").mongoURI;

// Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
