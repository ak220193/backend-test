const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const TestModel = require("./model/test");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Note: Correct usage of cors as a function call

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      TestModel.create({ name, email, password: hash })
        .then((user) => {
          res.json({ status: "ok" });
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

mongoose
  .connect(
    "mongodb+srv://mail2meak22frcrio:lOJV18yOf7x1CxUn@cluster0.jifpwtz.mongodb.net/test"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
