// Variáveis globais
let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
let tentativas = 0; // Inicializa o contador de tentativas

// Função para verificar o palpite
function adivinhar() {
    let palpite = document.getElementById('palpite').value; // Obtém o valor inserido no input de palpite
    let resultado = document.getElementById('resultado'); // Obtém o elemento onde o resultado será exibido
    let tentativasTexto = document.getElementById('tentativas'); // Obtém o elemento que exibe o número de tentativas

    if (palpite === '') { // Verifica se o input de palpite está vazio
        resultado.innerHTML = 'Por favor, insira um número!'; // Exibe mensagem se o input estiver vazio
        return; // Encerra a função se não houver valor no input
    }

    palpite = Number(palpite); // Converte o palpite para um número
    tentativas++; // Incrementa o número de tentativas a cada palpite

    if (palpite === numeroAleatorio) { // Verifica se o palpite é igual ao número aleatório
        resultado.innerHTML = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`; // Exibe mensagem de sucesso
        resultado.style.color = 'green'; // Altera a cor do texto para verde
    } else if (palpite > numeroAleatorio) { // Se o palpite for maior que o número aleatório
        resultado.innerHTML = 'O número é menor!'; // Exibe uma dica dizendo que o número é menor
        resultado.style.color = 'red'; // Altera a cor do texto para vermelho
    } else { // Se o palpite for menor que o número aleatório
        resultado.innerHTML = 'O número é maior!'; // Exibe uma dica dizendo que o número é maior
        resultado.style.color = 'red'; // Altera a cor do texto para vermelho
    }

    tentativasTexto.innerHTML = `Tentativas: ${tentativas}`; // Atualiza o contador de tentativas no HTML
}

// Função para reiniciar o jogo
function reiniciar() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um novo número aleatório
    tentativas = 0; // Reinicializa o número de tentativas para zero
    document.getElementById('palpite').value = ''; // Limpa o campo de input do palpite
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado exibido
    document.getElementById('tentativas').innerHTML = 'Tentativas: 0'; // Reinicializa o contador de tentativas exibido
}
