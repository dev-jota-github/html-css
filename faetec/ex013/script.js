// Função para atualizar o relógio e a data
function updateClock() {
    const now = new Date(); // Obtém a data e hora atuais

    // Relógio
    const hours = String(now.getHours()).padStart(2, '0'); // Obtém as horas
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Obtém os minutos
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Obtém os segundos
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`; // Atualiza o display do relógio

    // Data
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Nomes dos dias
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Nomes dos meses
    const dayName = days[now.getDay()]; // Nome do dia atual
    const day = String(now.getDate()).padStart(2, '0'); // Dia do mês
    const month = months[now.getMonth()]; // Nome do mês atual
    const year = now.getFullYear(); // Ano atual
    document.getElementById('date').textContent = `${dayName}, ${day} ${month} ${year}`; // Atualiza o display da data
}

setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
updateClock(); // Atualiza o relógio imediatamente ao carregar a página

// Funções da calculadora
function appendToDisplay(value) {
    document.getElementById('display').value += value; // Adiciona o valor clicado ao display
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Limpa o display da calculadora
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Apaga o último caractere do display
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Avalia a expressão e exibe o resultado
    } catch (error) {
        display.value = 'Erro'; // Exibe "Erro" se a expressão for inválida
    }
}
