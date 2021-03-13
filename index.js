const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(logger("dev"));

app.use("/", (req, res) => {
  res.status(200).json({
    ready: "yes",
  });
});

const port = process.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server listening on port: ${port}`);
    mongoose.connect(
      process.env.MONGO_CONNECTION_STRING,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Connected to database!!!");
        }
      }
    );
  }
});
