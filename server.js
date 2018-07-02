const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const items = require("./routes/api/items");
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

// Use routes
app.use("/api/items", items);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
