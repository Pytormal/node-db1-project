const express = require("express");

const AccRoute = require("./accounts/accounts-router.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", AccRoute);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
