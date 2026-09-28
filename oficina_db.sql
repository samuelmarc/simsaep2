-- ============================================================
-- SIMULADO SAEP - Técnico em Desenvolvimento de Sistemas
-- Sistema de Gestão - Oficina Mecânica
-- Script de criação e população do banco de dados
-- ============================================================
-- Este script já está pronto (BASE FORNECIDA).
-- ============================================================

DROP TABLE IF EXISTS ordens_servico;
DROP TABLE IF EXISTS veiculos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS usuarios;

-- ============================================================
-- TABELA: usuarios (funcionários da oficina que fazem login)
-- ============================================================
CREATE TABLE usuarios (
    id     SERIAL PRIMARY KEY,
    nome   VARCHAR(100) NOT NULL,
    login  VARCHAR(50) UNIQUE NOT NULL,
    senha  VARCHAR(255) NOT NULL -- hash (bcrypt)
);

-- ============================================================
-- TABELA: clientes
-- ============================================================
CREATE TABLE clientes (
    id        SERIAL PRIMARY KEY,
    nome      VARCHAR(100) NOT NULL,
    cpf       VARCHAR(255) NOT NULL, -- criptografado (reversível)
    telefone  VARCHAR(20)
);

-- ============================================================
-- TABELA: veiculos (cada veículo pertence a um único cliente)
-- ============================================================
CREATE TABLE veiculos (
    id          SERIAL PRIMARY KEY,
    placa       VARCHAR(10) NOT NULL,
    modelo      VARCHAR(50),
    cliente_id  INTEGER NOT NULL,
    CONSTRAINT fk_veiculos_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- ============================================================
-- TABELA: ordens_servico (cada ordem é vinculada a um veículo;
-- o cliente é obtido via JOIN: ordens_servico -> veiculos -> clientes)
-- ============================================================
CREATE TABLE ordens_servico (
    id                SERIAL PRIMARY KEY,
    veiculo_id        INTEGER NOT NULL,
    data_abertura     DATE NOT NULL,
    descricao         VARCHAR(255),
    CONSTRAINT fk_ordens_veiculo FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
);

-- ============================================================
-- POPULAÇÃO - USUARIOS
-- Login de exemplo: usuario = "admin", senha = "123456"
-- Login de exemplo: usuario = "marcos", senha = "123456"
-- Login de exemplo: usuario = "paula", senha = "123456"
-- Hash gerado de verdade com bcrypt (10 rounds) para "123456"
-- ============================================================
INSERT INTO usuarios (nome, login, senha) VALUES
('Administrador', 'admin', '$2b$10$KwxQbwyaa1psc0E4DVRrv.zPS2/zMvaF76jHRf/r2dZFDVLQhrCbi'),
('Marcos Aurélio', 'marcos', '$2b$10$KwxQbwyaa1psc0E4DVRrv.zPS2/zMvaF76jHRf/r2dZFDVLQhrCbi'),
('Paula Nogueira', 'paula', '$2b$10$KwxQbwyaa1psc0E4DVRrv.zPS2/zMvaF76jHRf/r2dZFDVLQhrCbi');

-- ============================================================
-- POPULAÇÃO - CLIENTES
-- CPFs abaixo já estão CRIPTOGRAFADOS (gerados com o mesmo
-- utilitário utils/crypto-utils.js). Os CPFs originais eram:
--   Roberto Alves  -> 444.444.444-44
--   Fernanda Lima  -> 555.555.555-55
--   Diego Ramos    -> 666.666.666-66
-- ============================================================
INSERT INTO clientes (nome, cpf, telefone) VALUES
('Roberto Alves', 'ec84afaca195fe21376dbb35ad9e57fc', '(49) 98888-0001'),
('Fernanda Lima', 'ee57db0d2206226ca590871f5afd879a', '(49) 98888-0002'),
('Diego Ramos',   'cf56371f2b1ee76385f056e0d29f2cd7', '(49) 98888-0003');

-- ============================================================
-- POPULAÇÃO - VEICULOS
-- ============================================================
INSERT INTO veiculos (placa, modelo, cliente_id) VALUES
('ABC1D23', 'Fiat Uno',       1),
('XYZ9E88', 'VW Gol',          2),
('QWE4F77', 'Honda Civic',     3);

-- ============================================================
-- POPULAÇÃO - ORDENS_SERVICO
-- ============================================================
INSERT INTO ordens_servico (veiculo_id, data_abertura, descricao) VALUES
(1, '2026-09-20', 'Troca de óleo e filtro'),
(2, '2026-09-18', 'Revisão de freios'),
(3, '2026-09-22', 'Diagnóstico de motor');
