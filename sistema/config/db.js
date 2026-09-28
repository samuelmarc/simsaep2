// ============================================================
// config/db.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// Mesma lógica do sistema principal - ver comentários lá se
// tiver dúvida de como usar dentro de uma rota.
// ============================================================

import pkg from 'pg';
const { Client } = pkg;

export function criarCliente() {
    return new Client({
        host:     'localhost',
        port:     5432,
        user:     'postgres',
        password: 'root',
        database: 'oficina_db'
    });
}
