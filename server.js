const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Configurar conexão com o banco de dados PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "motivational",
});

// Rota para retornar uma frase motivacional aleatória
app.get("/quote", async (req, res) => {
  try {
    const result = await pool.query("SELECT text FROM quotes ORDER BY RANDOM() LIMIT 1");
    const quote = result.rows[0];
    if (quote) {
      res.json({ quote: quote.text });
    } else {
      res.status(404).json({ error: "No quotes found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote." });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Motivational Service is running on http://localhost:${port}`);
});
