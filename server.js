const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 4000;

// Conecta ao banco de dados SQLite
const db = new sqlite3.Database("./quotes.db");

// Rota para retornar uma frase aleatória
app.get("/quote", (req, res) => {
  db.get("SELECT text FROM quotes ORDER BY RANDOM() LIMIT 1", [], (err, row) => {
    if (err) {
      console.error("Erro ao buscar frase:", err.message);
      return res.status(500).json({ error: "Erro interno" });
    }
    if (row) {
      res.json({ quote: row.text });
    } else {
      res.status(404).json({ error: "Nenhuma frase encontrada" });
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
