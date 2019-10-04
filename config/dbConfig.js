const knex = require('knex');

const secrets = require('./secrets')

const environment = secrets.environment || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
