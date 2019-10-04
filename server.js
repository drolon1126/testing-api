const express = require('express');
const helmet = require('helmet')

const secrets = require('./config/secrets')

console.log('environment:', secrets.environment)

const userRouter = require('./users/userRouter')

const server = express();

server.use(helmet())
server.use(express.json());
server.use(logger);


server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`Let's write some middleware!`)
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now())
  next();
};

module.exports = server;
