const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { response, application } = require("express");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_KEY = "fvbjhvb&fvfb*vfjkvue?efepof9h3g282";
app.use(cors());
app.use(express.json());

//mongo URI
const mongoURL =
  "mongodb+srv://admin:" +
  process.env.API_KEY +
  "@cluster0.wwxg6zh.mongodb.net/?retryWrites=true&w=majority";

//Mongoose connect
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => console.log(e));

//register User to DB

require("./models/usermodel");

const User = mongoose.model("userInfo");


app.post("/register", async (req, res) => {
  const { name, username, password } = req.body;
  try {
    // const olduser = await User.findOne({ username });
    // // if (olduser) {
    // //  return res.json({error:"user exists"});
    // // }
    const encryptedPassword = await bcryptjs.hash(password, 10);
    await User.create({
      name,
      username,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    res.json({ error: "user not found" });
  }
  if (await bcryptjs.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_KEY);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  } else {
    res.json({ status: "error", error: "Invalid password" });
  }
});

app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_KEY);
    const userName = user.username;
    User.findOne({ username: userName })
      .then((data) => {
        res.send({ staus: "ok", data: data });
      })
      .catch({ status: "error", data: error });
  } catch (error) {}
});


//port
app.listen(5000, (req, res) => {
  console.log("running on port 5000");
});
