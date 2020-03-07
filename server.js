const express = require('express');

const welcomeRouter = require('./welcomeRouter');

const server = express();

server.use(express.json());
server.use('/api/welcome', welcomeRouter);

module.exports = server;