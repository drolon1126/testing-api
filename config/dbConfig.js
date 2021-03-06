const knex = require('knex');

const secrets = require('./secrets')

//const environment = process.env.NODE_ENV || 'development';
const environment = secrets.environment || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
