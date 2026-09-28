// ============================================================
// middleware/auth-middleware.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
//
// Isso é o que faz a "sessão com tempo de expiração" (RF-07) ter
// efeito de verdade no sistema. Sem isso, a sessão até existiria,
// mas nada a estaria conferindo - ou seja, qualquer rota
// continuaria funcionando mesmo com o usuário "deslogado".
//
// COMO USAR: coloque esse middleware nas rotas que só podem ser
// acessadas por quem estiver logado (praticamente todas, menos
// login). Exemplo em routes/tutores.js:
//
//   import { verificarSessao } from '../middleware/auth-middleware.js';
//
//   app.get('/api/tutores', verificarSessao, async (req, res) => {
//       // este código só roda se o usuário estiver com sessão válida
//       ...
//   });
//
// O que acontece quando a sessão expirou ou o usuário nunca logou:
// a rota nem chega a executar - a resposta já volta com status 401
// e um JSON de erro. No front-end (seus arquivos .js em public/js/),
// isso deve ser tratado assim, sempre que você fizer um fetch numa
// rota protegida:
//
//   const resposta = await fetch('/api/tutores');
//   if (resposta.status === 401) {
//       window.location.href = '/login.html';
//       return;
//   }
//
// Isso já está pronto em principal.js, tutores.js, pets.js e
// agendamentos.js (no trecho de inicialização de cada página) -
// vocês não precisam reescrever essa parte, só manter esse padrão
// se criarem novas chamadas fetch.
// ============================================================

export function verificarSessao(req, res, next) {
    if (req.session && req.session.usuario) {
        // sessão válida - segue para a rota normalmente
        return next();
    }
    // sem sessão, ou sessão expirada (o express-session já remove
    // os dados da sessão automaticamente quando o tempo definido
    // em maxAge é atingido)
    return res.status(401).json({ erro: 'Sessão expirada ou usuário não autenticado.' });
}
