const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const db = mongoose.connection;
const addItem = require("./controllers/addItem");
const getItems = require("./controllers/getItems");
const removeItems = require("./controllers/removeItem");

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27018/", {
  user: "cl-dashboard",
  pass: "cl-dashboard",
  useNewUrlParser: true,
  dbName: "cl-dashboard"
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected successfully ");
});

// var Learn = mongoose.model("Things I learnt", taskSchema);
// var Accomplish = mongoose.model("Accomplishments", taskSchema);

app.get("/daily-tasks/get-items", getItems);

app.post("/daily-tasks/add-items", addItem);

app.delete("/daily-tasks/remove-items", removeItems);

app.listen(PORT, () => console.log("Listening on port", PORT));
