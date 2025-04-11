const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const motivationalQuotes = [
  "A coragem de lutar é maior do que o medo de perder.",
  "A faixa preta é apenas uma faixa branca que nunca desistiu.",
  "A derrota ensina mais do que a vitória.",
  "Treine como se fosse um iniciante, lute como um campeão.",
  "O Jiu-Jitsu começa onde a força termina."
];

async function initDb() {
  try {
    console.log("Conectando ao banco de dados...");
    const client = await pool.connect();

    // Criação da tabela de frases
    await client.query(`
      CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL
      );
    `);

    console.log("Tabela 'quotes' criada ou já existente.");

    // Inserir frases no banco
    for (const quote of motivationalQuotes) {
      await client.query('INSERT INTO quotes (text) VALUES ($1)', [quote]);
    }

    console.log("Frases motivacionais inseridas com sucesso!");

    client.release();
    process.exit(0);
  } catch (err) {
    console.error("Erro ao inicializar o banco de dados:", err);
    process.exit(1);
  }
}

initDb();
