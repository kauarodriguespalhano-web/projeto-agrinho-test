// Seleciona os elementos do HTML pelo ID
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Mostra a mensagem mudando o estilo para block (visível)
    mensagem.style.display = 'block';
});
