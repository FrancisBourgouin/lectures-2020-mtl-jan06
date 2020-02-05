module.exports = client => {
  const pokemonSelect = queryParams => {
    const { columns, limit, extended } = queryParams;
    let queryString = "";
    if (columns) {
      queryString += `SELECT ${columns} FROM pokemons`;
    } else {
      queryString += "SELECT * FROM pokemons";
    }
    if (extended) {
      queryString +=
        " JOIN element_types ON pokemons.type_id = element_types.id";
    }

    if (limit) {
      queryString += ` LIMIT ${limit}`;
    }
    console.log(queryString);
    return client.query(queryString);
  };

  const parseDbResult = result => {
    const { rowCount, rows } = result;

    return { rowCount, rows };
  };

  return { pokemonSelect, parseDbResult };
};

// module.exports = pgClientNameOrSomething => {

//     return {nameOfFunctions you put inside}
// }
