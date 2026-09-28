// ============================================================
// routes/clientes.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// A estrutura de cada rota já está pronta. O que falta é a
// lógica específica (marcada com TODO).
//
// Lembretes:
//   - CPF deve ser CRIPTOGRAFADO ao salvar/atualizar e
//     DESCRIPTOGRAFADO ao listar/exibir (utils/crypto-utils.js)
//   - Cada rota já vem protegida pelo middleware verificarSessao
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { criptografarCPF, descriptografarCPF } from '../utils/crypto-utils.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// GET / -> listar clientes
// GET /?busca=termo -> listar clientes filtrados
// ─────────────────────────────────────────
router.get('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        // TODO: req.query.busca contém o termo digitado (se houver).
        // Monte a query de acordo
        const query = req.query.busca;
        let resultado;
        if (!query) {
            resultado = await client.query('SELECT * FROM clientes'); 
        } else {
            resultado = await client.query(`SELECT * FROM clientes WHERE nome ILIKE '%' || $1 || '%'`, [query]); 
        }

        resultado.rows.forEach(row => {
            row.cpf = descriptografarCPF(row.cpf)
        });

        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// POST / -> inserir novo cliente
// ─────────────────────────────────────────
router.post('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { nome, cpf, telefone } = req.body;

        if (!nome || !cpf || !telefone) {
            return res.status(400).json({ erro: 'Nome, CPF e Telefone são obrigatórios.' });
        }

        const resultado = await client.query(`
            INSERT INTO clientes (nome, CPF, telefone)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [nome, criptografarCPF(cpf), telefone]);

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// PUT /:id -> editar cliente existente
// ─────────────────────────────────────────
router.put('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;
        const { nome, cpf, telefone } = req.body;

        const cpfCrypt = criptografarCPF(cpf)

        const resultado = await client.query("UPDATE clientes SET nome = $1, cpf = $2, telefone = $3 WHERE id = $4 RETURNING *", [nome.trim(), cpfCrypt.trim(), telefone.trim(), id])
        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }

        res.json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// DELETE /:id -> excluir cliente
// ─────────────────────────────────────────
router.delete('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;

        const resultado = await client.query(
            'DELETE FROM clientes WHERE id = $1 RETURNING nome',
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Cliente não encontrado.' });
        }

        res.json({ mensagem: `"${resultado.rows[0].nome}" removido com sucesso.` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
