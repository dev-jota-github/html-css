let res = document.querySelector('section#result'); // Seleciona o elemento da seção de resultados
let tentativasDisplay = document.getElementById('tentativas'); // Seleciona o parágrafo do contador de tentativas
let computer = 0; // Armazena o número sorteado pelo computador
let jogador = 0; // Armazena o palpite do jogador
let tentativas = 0;

// Função para sortear um número aleatório entre 1 e 100
function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    computer = min + Math.trunc(dif * aleatorio); // Gera o número aleatório para o computador
    tentativas = 0; // Reseta o contador de tentativas para um novo jogo
    res.innerHTML = ''; // Limpa a área de resultados
    tentativasDisplay.textContent = 'Tentativas: 0'; // Reseta o contador visível
}

// Função para jogar e comparar o palpite com o número sorteado
function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?')); // Solicita o palpite do jogador e converte para número
    tentativas++;
    tentativasDisplay.textContent = `Tentativas: ${tentativas}`; // Atualiza o contador de tentativas visível

    if (jogador < computer) {
        res.innerHTML += `<p>Você falou ${jogador}! Meu número é <strong>MAIOR</strong>!</p>`;
        result.style.color = 'red'
    } else if (jogador > computer) {
        res.innerHTML += `<p>Você falou ${jogador}! Meu número é <strong>MENOR</strong>!</p>`;
        result.style.color = 'red'
    } else if (jogador === computer) { // Comparação usando ===
        res.innerHTML += `<p><strong>Parabéns!</strong> Você acertou! Eu tinha sorteado o valor ${computer}!</p>`;
        result.style.color = 'green'
    }
}
