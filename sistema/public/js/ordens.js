// ============================================================
// public/js/ordens.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊ (ALUNO DESENVOLVE).
//
// Sugestão de estrutura por linha: cada linha mostra os dados da
// ordem, e na coluna "Ações" um campo de data (já preenchido com
// a data atual) mais um botão "Salvar" para atualizar.
// ============================================================

const corpoTabela = document.getElementById('corpo-tabela-ordens');
const tabela = document.getElementById('tabela-ordens');
const mensagemOrdens = document.getElementById('mensagem-ordens');

inicializar();

async function inicializar() {
    await carregarOrdens();
}

// ------------------------------------------------------------
// Listar ordens de serviço ordenadas por data, com dados de
// veículo e cliente (join)
// ------------------------------------------------------------
async function carregarOrdens() {
    try {
        const url = '/api/ordens';

        const resposta = await fetch(url);

        if (resposta.status == 401) {
            window.location.href = '/login.html';
            return;
        }

        const dados = await resposta.json();
        renderizarOrdens(dados);

    } catch (erro) {
        mensagemOrdens.textContent = 'Erro ao carregar ordens de serviço.';
        console.error(erro);
    }
}

function renderizarOrdens(ordens) {
    if (!ordens || ordens.length === 0) {
        mensagemOrdens.classList.remove("d-none");
        tabela.classList.add("d-none");
        return;
    }

    mensagemOrdens.classList.add("d-none");
    tabela.classList.remove("d-none");

    corpoTabela.innerHTML = '';

    ordens.forEach(ordem => {
        const dataFormatada = ordem.data_abertura ? ordem.data_abertura.split('T')[0] : '';
        const linha = document.createElement('tr');
        
        linha.innerHTML = `
            <td>${Intl.DateTimeFormat("pt-br").format(new Date(ordem.data_abertura))}</td>
            <td>${ordem.modelo}</td>
            <td>${ordem.placa}</td>
            <td>${ordem.nome}</td>
            <td>${ordem.telefone}</td>
            <td>${ordem.descricao}</td>
            <td>
                <input name="date" type="date" value="${dataFormatada}" data-id="${ordem.id}">
                <button class="btn-salvar" data-id="${ordem.id}">Salvar</button>
            </td>
        `;
        corpoTabela.appendChild(linha);
    });

    const botoesSalvar = corpoTabela.querySelectorAll('.btn-salvar');
    
    botoesSalvar.forEach(botao => {
        botao.addEventListener('click', function() {
            const idOrdem = this.getAttribute('data-id');
            
            const inputData = corpoTabela.querySelector(`input[data-id="${idOrdem}"]`);
            const novaData = inputData.value;

            atualizarDataOrdem(idOrdem, novaData);
        });
    });
}


// ------------------------------------------------------------
// Atualizar a data de abertura de uma ordem
// ------------------------------------------------------------
async function atualizarDataOrdem(id, novaData) {
    try {
        const resposta = await fetch(`/api/ordens/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data_abertura": novaData
            })
        })
        if (resposta.status == 401) {
            window.location.href = '/login.html';
            return;
        }
        if (resposta.status != 200) {
            alert("Não foi possível editar a ordem de serviço.")
            return
        }

        carregarOrdens()
    } catch (erro) {
        alert('Erro ao atualizar data da ordem de serviço.');
        console.error(erro);
    }
}
