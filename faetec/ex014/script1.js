function inicio(){
    let nome = window.prompt('Digite seu nome')
    let res = window.document.getElementById('resultado')
    res.innerHTML = `<p> Olá ${nome}, seja bem-vindo!</p>`
}
