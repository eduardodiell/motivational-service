CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL
);

INSERT INTO quotes (text) VALUES
('Não desista até que esteja orgulhoso.'),
('O único limite para o seu sucesso é você.'),
('Disciplina é o caminho para a liberdade.'),
('Seu maior adversário é você mesmo.');
