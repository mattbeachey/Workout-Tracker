const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  

  
//Mongooe connection Brian sent
  // mongoose
  // .connect(
  //   process.env.MONGODB_URI || "mongodb://localhost/tictacdb",
  //   { useNewUrlParser: true }
  // )
  // .then(() => console.log("MongoDB successfully connected"))
  // .catch(err => console.log(err));