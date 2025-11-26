app.get("/status", (req, res) => {
  res.status(200).json({ message: "DEPLOY TESTE - SUCESSO!" });
});

