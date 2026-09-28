// ============================================================
// app.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// Mesma estrutura do sistema principal (ver lá os comentários
// completos sobre como o Router funciona, se tiver dúvida).
// ============================================================

import express from 'express';
import session from 'express-session';

import authRoutes from './routes/auth.js';
import clientesRoutes from './routes/clientes.js';
import veiculosRoutes from './routes/veiculos.js';
import ordensRoutes from './routes/ordens.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: 'simulado-saep-oficina-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 15 * 60 * 1000 // 15 minutos
    }
}));

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/veiculos', veiculosRoutes);
app.use('/api/ordens', ordensRoutes);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
