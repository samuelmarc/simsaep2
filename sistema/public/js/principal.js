// ============================================================
// public/js/principal.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊ (ALUNO DESENVOLVE).
//
// O que falta aqui:
//   - RF-09: recuperar o nome do usuário autenticado e exibir
//     no elemento #nome-usuario
//   - RF-10: implementar o logout no botão #btn-sair
//
// A navegação para Tutores, Pets e Agendamentos (RF-11) já está
// pronta no HTML (são apenas links <a>), vocês não precisam
// mexer nisso.
// ============================================================

const nomeUsuarioEl = document.getElementById('nome-usuario');
const btnSair = document.getElementById('btn-sair');

inicializar();

async function inicializar() {
    await carregarUsuarioLogado();
}

async function carregarUsuarioLogado() {
    try {
        const resposta = await fetch('/api/auth/sessao');

        if (resposta.status === 401) {
            // sessão expirada ou usuário não logado
            window.location.href = '/login.html';
            return;
        }

        const dados = await resposta.json();

        const nomeUsuarioEl = document.getElementById("nome-usuario");
        nomeUsuarioEl.textContent = dados.usuario.nome;

    } catch (erro) {
        console.error('Erro ao verificar sessão:', erro);
    }
}

btnSair.addEventListener('click', async () => {
    await fetch('/api/auth/logout');
    window.location.replace("/login.html");
});
