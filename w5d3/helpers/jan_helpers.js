const createDBHelpers = client => {
  const selectPokemons = id => {
    if (id) {
      return client.query(`SELECT * FROM pokemons WHERE id = ${id}`);
    } else {
      return client.query("SELECT * FROM pokemons");
    }
  };

  const OtherSelectPokemons = id => {
    let query = `SELECT * FROM pokemons`;
    if (id) {
      query += ` WHERE id = ${id}`;
      return client.query(query);
    } else {
      return client.query(query);
    }
  };

  const insertPokemon = (name, height, typeId) => {
    const query = `INSERT INTO pokemons (name, height, type_id) VALUES ('${name}',${height},${typeId}) RETURNING *`;
    return client.query(query);
  };

  return { selectPokemons, insertPokemon };
};

module.exports = createDBHelpers;
