const express = require("express");

const server = express();

const accRouter = require('./accounts/accounts-router')

server.use(express.json());
server.use('/api/accounts',accRouter)

server.get('/', (req, res) => {
    res.status(200).json({api: 'running'})
})

module.exports = server;
