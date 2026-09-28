// ============================================================
// routes/veiculos.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Lembrete: o cadastro de veículo é obrigatoriamente vinculado
// a um cliente (cliente_id não pode ser nulo).
// ============================================================

import express from 'express';
import { criarCliente } from '../config/db.js';
import { verificarSessao } from '../middleware/auth-middleware.js';

const router = express.Router();

// ─────────────────────────────────────────
// POST / -> inserir novo veículo, associado a um cliente
// ─────────────────────────────────────────
router.post('/', verificarSessao, async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { placa, modelo, cliente_id } = req.body;

        if (!placa || !modelo || !cliente_id) {
            return res.status(400).json({ erro: 'Placa, Modelo e Cliente são obrigatórios.' });
        }

        const result = await client.query('SELECT 1 FROM clientes WHERE id = $1', [cliente_id])
        if (result.rowCount <= 0) {
            return res.status(404).json({
                erro: 'Cliente não existe'
            })
        }

        const resultado = await client.query(`
            INSERT INTO veiculos (placa, modelo, cliente_id)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [placa, modelo, cliente_id]);

        res.status(201).json(resultado.rows[0]);

        // TODO: validar que placa e cliente_id foram informados

        // TODO: montar o INSERT
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

export default router;
