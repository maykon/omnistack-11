const knex = require("knex");
const config = require("../../knexfile");
const conenction = knex(config.development);

module.exports = conenction;
