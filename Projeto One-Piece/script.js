const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')


botoes.forEach( (botao, indice) => {
    botao.addEventListener("click", () => {
        // Verificar se já tem um botão selecionado, se sim, tirar a classe selecionado dele!
        desselecionarBotao();

        // add a classe selecioando ao botão
        botao.classList.add("selecionado")

        // Verificar se já tem um personagem selecionado, se sim, tirar a classe selecionado dele!
        desselecionarPersonagem();

        // Mostrar a informação do personagem selecionado
        personagens[indice].classList.add('selecionado')
    })
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

