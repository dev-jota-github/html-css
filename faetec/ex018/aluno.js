function InserirNotas() {
  let nome = prompt("Insira o nome do aluno");
  const nota1 = parseFloat(prompt("Insira a nota do aluno do 1º Semestre"));
  const nota2 = parseFloat(prompt("Insira a nota do aluno do 2º Semestre "));

  if (isNaN(nota1) || isNaN(nota2)) {
    alert("Insira uma nota válida");
    return;
  }

  const media = (nota1 + nota2) / 2;

  let situacao, cor, backgroundColor;
  if (media <= 3) {
    situacao = "Reprovado";
    cor = "darkred";
    backgroundColor = "lightred";
  } else if (media <= 6) {
    situacao = "Recuperação";
    cor = "goldenrod";
    backgroundColor = "lightyellow";
  } else {
    situacao = "Aprovado";
    cor = "darkgreen";
    backgroundColor = "lightgreen";
  }

  const resultado = (document.getElementById(
    "situacao"
  ).innerHTML = `<h3>Situação do aluno</h3>
    <p>Com as notas ${nota1} e ${nota2}, o aluno(a) ${nome} ficou com a média ${media}</p>
    <p>Com a média ${media.toFixed(
      2
    )} o aluno ficou <strong style="color: ${cor}; background-color: ${backgroundColor};">${situacao}</strong>`);
}
