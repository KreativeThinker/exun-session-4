import fetch from "node-fetch";

const name = process.argv.slice(2, 3);
let search = `https://api.nationalize.io?name=${name}`;

const response = await fetch(search);
const data = await response.json();

console.log(data.country[0].country_id);
