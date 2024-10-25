function teste() {
    let res = document.querySelector('section#result')
    let num = Number(window.prompt('Digite o Número desejado:'));
    let tipo;
    if (num % 2 == 0) {
        tipo = '<strong>Par</strong>';
    } else {
        tipo = '<strong>Ímpar</strong>';
    }
    res.innerHTML = `O número ${num} é ${tipo}.`;
}