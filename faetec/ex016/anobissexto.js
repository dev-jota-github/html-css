function verificarAnoBissexto() {
    let ano = parseInt(document.querySelector('#ano').value);
    let res = document.querySelector('section#result p');
    let resultado;
    
    if ( ano % 4 === 0 ){
        resultado = `É Bissexto`;
    } else {
        resultado = `Não é Bissexto`;
    };

    /*/if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado = `<strong>Bissexto</strong>`;
    } else {
        resultado = `<strong>Não é bissexto</strong>`;
    }/*/

    res.innerHTML = `O ano ${ano} ${resultado}.`;

    let proximoAnoBissexto = ano + 4;

    // Cálculo do próximo ano bissexto
    /*/let proximoAnoBissexto = ano + 1;
    while (!((proximoAnoBissexto % 4 === 0 && proximoAnoBissexto % 100 !== 0) || (proximoAnoBissexto % 400 === 0))) {
        proximoAnoBissexto++;
    }/*/

    res.innerHTML += `<p>O próximo ano bissexto será ${proximoAnoBissexto}.</p>`;
}