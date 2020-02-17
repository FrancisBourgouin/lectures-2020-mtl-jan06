// Object destructuring

const forge = { id: 1, structure: "brick", fuel: "propane" };

console.log(`My forge is using ${forge.fuel} as fuel.`);

// const fuel = forge.fuel;
// const structure = forge.structure;
// const id = forge.id;

// const { fuel, structure, id, chicken } = forge;

// console.log(chicken);

const { fuel: forgeFuel, structure, id, chicken } = forge;

// Array destructuring

const metalList = ["High Carbon Steel", "Zinc", "Gojira"];

const [firstMetal, secondMetal, thirdMetal] = metalList;
const [firstMetal, secondMetal] = metalList;

const pg = { rows: [{ name: "bob" }] };

const [firstResult] = pg.rows;

const [firstResult, secondResult, ..., nthResult] = pg.rows;

const firstResult = pg.rows[0]
const secondResult = pg.rows[1]
//...
const nthResult = pg.rows[n]

firstResult.name;

// Spread operator

const mambo = [1,2,3,4,5]
mambo.push(6)

// mambo.map()


const mamboRemix = mambo

mamboRemix.push(6)
// Property shorthand
