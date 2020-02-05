const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Client } = require("pg");
const { check, validationResult } = require("express-validator");
const createDBHelpersForThis = require("./helpers/jan_helpers");

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbClient = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

dbClient
  .connect()
  .then(() => console.log("I AM CONNECTED"))
  .catch(err => console.log("I AM NOT CONNECTED" + err));

const { selectPokemons, insertPokemon } = createDBHelpersForThis(dbClient);
console.log(createDBHelpersForThis(dbClient));

// const listOfHelpers = dbHelpers(dbClient);
// const selectPokemons = listOfHelpers.selectPokemons
// const insertPokemon = listOfHelpers.insertPokemon

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/pokemons", (req, res) => {
  selectPokemons().then(qRes => res.json(qRes.rows));
});

app.get("/pokemons/:id", (req, res) => {
  selectPokemons(req.params.id).then(qRes => res.json(qRes.rows));
});

const validationPost = [
  check("name").isAlpha(),
  check("height").isNumeric(),
  check("typeId").isNumeric()
];

app.post("/pokemons", validationPost, (req, res) => {
  const { name, height, typeId } = req.body;
  console.log(req.body);
  const errors = validationResult(req);
  if (name && height && typeId && errors.isEmpty()) {
    insertPokemon(name, height, typeId)
      .then(qRes => res.json(qRes.rows))
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  } else {
    res.send("WHAT DO YOU THINK YOU ARE DOING");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
