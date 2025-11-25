// src/app.js
const express = require("express");
const app = express();

app.get("/status", (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = app;
