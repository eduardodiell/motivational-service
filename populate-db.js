const sqlite3 = require("sqlite3").verbose();

// Conecta ou cria o banco de dados
const db = new sqlite3.Database("./quotes.db");

db.serialize(() => {
  // Cria a tabela "quotes" se não existir
  db.run(`
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    )
  `);

  // Insere frases motivacionais
  const stmt = db.prepare("INSERT INTO quotes (text) VALUES (?)");

  const phrases = [
"No tatame, a derrota só acontece quando você para de tentar.",
"Cada queda é uma oportunidade para aprender a levantar mais forte.",
"A faixa preta é apenas uma faixa branca que nunca desistiu.",
"O verdadeiro adversário está dentro de você mesmo; vença-o todos os dias.",
"Mais importante que vencer no tatame é vencer o desafio de continuar treinando.",
"O Jiu-Jitsu ensina a arte de ser calmo em meio ao caos.",
"A técnica sempre vence a força bruta, mas a persistência supera qualquer obstáculo.",
"Cada treino é um passo mais perto da excelência.",
"No Jiu-Jitsu, não há atalhos; o progresso é conquistado no suor diário.",
"Abrace o desconforto no treino; ele é o seu professor mais honesto.",
"A resistência ao cansaço começa na força da mente.",
"No tatame, não existem perdedores, apenas aprendizes.",
"Grandes vitórias começam com pequenos ajustes na técnica.",
"O cinturão não mede a força, mas sim a jornada e o aprendizado.",
"Respeito e humildade são os pilares do verdadeiro lutador."
  ];

  phrases.forEach((phrase) => {
    stmt.run(phrase);
  });

  stmt.finalize();
  console.log("Banco de dados populado com sucesso!");
});

// Fecha o banco de dados
db.close();
