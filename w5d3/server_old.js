const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const dbHelper = require("./helpers/db_helpers");
require("dotenv").config();

console.log(dbHelper());
const port = process.env.PORT || 3000;
const app = express();
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

app.use(bodyParser.json());

client.connect();

const { pokemonSelect, parseDbResult } = dbHelper(client);

app.get("/", (req, res) => {
  const queryString = {
    text: "INSERT INTO pokemons (name, height, type_id) VALUES ( $1, $2, $3)",
    values: ["Secret Pokemon", Math.floor(Math.random() * 200), 1]
  };
  client.query(queryString).then(dbRes => res.json(dbRes));
});

app.get("/pokemons", (req, res) => {
  // client.query("SELECT * FROM pokemons").then(dbRes => res.json(dbRes.rows));
  const queryParams = {
    limit: undefined,
    columns: "pokemons.*, element_types.name AS element",
    extended: true
  };

  pokemonSelect(queryParams)
    .then(val => res.json(parseDbResult(val)))
    .catch(err => res.json(err));
});

app.get("/pokemons/:id", (req, res) => {
  const query = {
    text:
      "SELECT pokemons.*, element_types.name AS type, element_types.weakness AS weakness FROM pokemons JOIN element_types ON pokemons.type_id = element_types.id WHERE pokemons.id = $1",
    values: [req.params.id]
  };

  client.query(query).then(dbRes => res.json(dbRes.rows));
});

app.get("/exists/:name", (req, res) => {
  client
    .query(`SELECT id FROM pokemons WHERE name LIKE '${req.params.name}'`)
    .then(result => {
      if (result.rowCount) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
