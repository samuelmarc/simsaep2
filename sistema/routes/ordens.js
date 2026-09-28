// ============================================================
// routes/ordens.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Lembrete sobre o JOIN: o cliente não está diretamente ligado à
// ordem de serviço - o caminho é ordens_servico -> veiculos ->
// clientes. Veja exemplos/exemplo-join-multiplas-tabelas.sql.
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// GET / -> listar ordens de serviço ordenadas por data de
// abertura, com dados do veículo e do cliente
// ─────────────────────────────────────────
router.get('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        // TODO: montar a query com JOIN (ordens_servico -> veiculos
        // -> clientes) e ORDER BY pela data de abertura

        const resultado = await client.query(`
            SELECT os.id, os.data_abertura, os.descricao, v.modelo, v.placa, c.nome, c.telefone FROM ordens_servico os
            LEFT JOIN veiculos v ON v.id = os.veiculo_id
            LEFT JOIN clientes c ON c.id = v.cliente_id
            ORDER BY os.data_abertura DESC
        `);

        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

// ─────────────────────────────────────────
// PUT /:id -> atualizar a data de abertura de uma ordem
// ─────────────────────────────────────────
router.put('/:id', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { id } = req.params;
        const { data_abertura } = req.body;

        const resultado = await client.query(`
            UPDATE ordens_servico
            SET data_abertura = $1
            WHERE id = $2
            RETURNING *
        `, [data_abertura, id]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Ordem de serviço não encontrado.' });
        }

        res.json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
