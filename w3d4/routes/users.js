const express = require("express");
const users = express.Router();

users.get("/", (req, res) => {
  res.cookie("user", "chicken");
  res.send("I AM USER");
});
users.get("/:user_id", (req, res) => {
  res.send("I AM A SPECIFIC USER");
});
users.post("/", (req, res) => {
  console.log("HEY YOU JUST POSTED");
  res.redirect("/users");
});

users.put("/", (req, res) => {
  console.log("HEY YOU JUST PUTTED");
  res.redirect("/users");
});

users.delete("/", (req, res) => {
  console.log("HEY YOU JUST DELETED");
  res.redirect("/users");
});

module.exports = users;
