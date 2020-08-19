require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const authRoute = require("./routes/api/auth");
const galleryRoute = require("./routes/api/gallery");
const postRoute = require("./routes/api/post");
const profileRoute = require("./routes/api/profile");
const userRoute = require("./routes/api/user");

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

app.use(express.json());
app.use(cors());

app.use("api/auth", authRoute);
app.use("api/gallery", galleryRoute);
app.use("api/post", postRoute);
app.use("api/profile", profileRoute);
app.use("api/user", userRoute);

app.listen(port, console.log(`express app running on port ${port}`));
