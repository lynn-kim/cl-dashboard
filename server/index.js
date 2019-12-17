const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.BACKEND_PORT || 5000;
const db = mongoose.connection;

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27018/";

mongoose.connect(mongoUri, {
  // user: "cl-dashboard",
  // pass: "cl-dashboard123",
  // useNewUrlParser: true,
  // dbName: "cl-dashboard"
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected successfully ");
});

const apiRouter = require("./routes/api");

app.use(apiRouter);

app.listen(PORT, () => console.log("Listening on port", PORT));
