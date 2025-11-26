const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Aplicação Online 🚀" });
});

// 🔥 Rota que valida se o deploy automático funcionou
app.get("/status", (req, res) => {
  res.status(200).json({ message: "DEPLOY TESTE – SUCESSO!" });
});

module.exports = app;
