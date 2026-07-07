-- =====================================================================
-- SCRIPT DE CRIAÇÃO E CONFIGURAÇÃO DO BANCO DE DADOS - FANTASYTOCA BD
-- =====================================================================

CREATE DATABASE IF NOT EXISTS db_fantasytoca;
USE db_fantasytoca;

-- 1. Remoção Inteligente de Tabelas Anteriores (Ordem correta de dependências)
DROP TABLE IF EXISTS item_decoracao;
DROP TABLE IF EXISTS fantasia;
DROP TABLE IF EXISTS tema;

-- 2. Criação da Tabela 'tema' (Entidade Mãe)
CREATE TABLE tema (
    id_tema INT AUTO_INCREMENT PRIMARY KEY,
    nome_tema VARCHAR(50) NOT NULL,
    descricao_tema VARCHAR(200),
    preco_aluguel DECIMAL(10,2) NOT NULL
);

-- 3. Criação da Tabela 'fantasia' (Dependente de 'tema')
CREATE TABLE fantasia (
    id_fantasia INT AUTO_INCREMENT PRIMARY KEY,
    nome_fantasia VARCHAR(100) NOT NULL,
    tamanho VARCHAR(5),
    id_tema INT NOT NULL,
    disponivel BOOLEAN DEFAULT TRUE,
    vezes_emprestada INT DEFAULT 0,
    FOREIGN KEY (id_tema) REFERENCES tema(id_tema) ON DELETE CASCADE
);

-- 4. Criação da Tabela 'item_decoracao' (Dependente de 'tema')
CREATE TABLE item_decoracao (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    nome_item VARCHAR(100) NOT NULL,
    quantidade_estoque INT NOT NULL,
    id_tema INT NOT NULL,
    FOREIGN KEY (id_tema) REFERENCES tema(id_tema) ON DELETE CASCADE
);


-- =====================================================================
-- POPULADORES DE TESTE (SEEDS)
-- =====================================================================

-- Inserindo os Temas Oficiais da loja
INSERT INTO tema (nome_tema, descricao_tema, preco_aluguel) VALUES
('Frozen', 'Um reino congelante cheio de vestidos brilhantes, flocos de neve e magia da Rainha Elsa e Princesa Anna.', 250.00),
('Batman', 'Aventuras na sombria Gotham City com capas pretas, máscaras detalhadas e adereços de morcego.', 220.00),
('Safari', 'Uma expedição na selva para pequenos aventureiros, repleta de bichinhos fofos e tons de caqui.', 180.00),
('Unicórnio', 'Arco-íris, purpurina, chifres brilhantes e um universo de tons pastel extremamente encantador.', 200.00);

-- Inserindo as Fantasias associadas aos Temas respectivos
-- Frozen (id_tema = 1)
INSERT INTO fantasia (nome_fantasia, tamanho, id_tema, disponivel, vezes_emprestada) VALUES
('Vestido da Elsa com Capa de Brilho', 'G', 1, TRUE, 14),
('Vestido de Viagem da Anna', 'M', 1, TRUE, 9),
('Fantasia do Boneco de Neve Olaf Pelúcia', 'P', 1, FALSE, 5);

-- Batman (id_tema = 2)
INSERT INTO fantasia (nome_fantasia, tamanho, id_tema, disponivel, vezes_emprestada) VALUES
('Traje Batman Cavaleiro das Trevas com Capa', 'M', 2, TRUE, 18),
('Traje Clássico Robin', 'P', 2, TRUE, 7);

-- Safari (id_tema = 3)
INSERT INTO fantasia (nome_fantasia, tamanho, id_tema, disponivel, vezes_emprestada) VALUES
('Colete de Explorador e Chapéu Caqui', 'M', 3, TRUE, 12),
('Macacão de Leãozinho Infantil Pelúcia', 'P', 3, TRUE, 4);

-- Unicórnio (id_tema = 4)
INSERT INTO fantasia (nome_fantasia, tamanho, id_tema, disponivel, vezes_emprestada) VALUES
('Vestido Tutu Arco-Íris de Unicórnio', 'G', 4, TRUE, 15),
('Tiara de Unicórnio Luxo com Flores e Cauda', 'U', 4, TRUE, 22);


-- Inserindo Itens de Decoração associados
-- Frozen (id_tema = 1)
INSERT INTO item_decoracao (nome_item, quantidade_estoque, id_tema) VALUES
('Pratos Descartáveis Floco de Neve Azul (Pkt c/ 20)', 15, 1),
('Copos Plásticos Elsa e Anna (Pkt c/ 20)', 8, 1), -- Alerta de Estoque Crítico (< 10)
('Toalha de Mesa de Cetim Azul Violeta', 5, 1);

-- Batman (id_tema = 2)
INSERT INTO item_decoracao (nome_item, quantidade_estoque, id_tema) VALUES
('Besta de Balões Pretos e Amarelos', 4, 2),
('Copos Descartáveis Morcego Emblema (Pkt c/ 20)', 20, 2),
('Pratos Descartáveis Gotham City (Pkt c/ 20)', 30, 2);

-- Safari (id_tema = 3)
INSERT INTO item_decoracao (nome_item, quantidade_estoque, id_tema) VALUES
('Painel Gigante Floresta de Tecido', 2, 3),
('Girafas de Pelúcia Decorativas Gigantes', 6, 3),
('Pratinhos Descartáveis Patinhas Alviverde (Pkt c/ 20)', 9, 3); -- Estoque Crítico (< 10)

-- Unicórnio (id_tema = 4)
INSERT INTO item_decoracao (nome_item, quantidade_estoque, id_tema) VALUES
('Arco Desconstruído Balões Pastel Macaron', 5, 4),
('Porta-Doces Nuvem Nuvem Branca Porcelana', 12, 4),
('Pratos de Papel Unicórnio Dourado (Pkt c/ 20)', 7, 4); -- Estoque Crítico (< 10)


-- =====================================================================
-- VIEWS DE TOMADA DE DECISÃO (RELATÓRIOS ESTRATÉGICOS)
-- =====================================================================

-- 1. View: v_fantasias_populares
-- Finalidade: Avaliar quais trajes infantis têm maior rotatividade e saída.
-- Auxilia o gestor a decidir quais novas aquisições de tamanhos e modelos fazer.
CREATE OR REPLACE VIEW v_fantasias_populares AS
SELECT 
    f.id_fantasia,
    f.nome_fantasia,
    f.tamanho,
    t.nome_tema,
    f.vezes_emprestada
FROM fantasia f
INNER JOIN tema t ON f.id_tema = t.id_tema
ORDER BY f.vezes_emprestada DESC;

-- 2. View: v_estoque_critico
-- Finalidade: Alertar quando suprimentos descartáveis de mesa (Copos, pratos)
-- caem abaixo de 10 unidades em estoque para que o gerente faça nova reposição pré-festa.
CREATE OR REPLACE VIEW v_estoque_critico AS
SELECT 
    i.id_item,
    i.nome_item,
    i.quantidade_estoque,
    t.nome_tema
FROM item_decoracao i
INNER JOIN tema t ON i.id_tema = t.id_tema
WHERE i.quantidade_estoque < 10
ORDER BY i.quantidade_estoque ASC;
