const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!

faixaEtaria = pessoa.idade
if (faixaEtaria < 18) {
  onsole.log("Olá, você é uma pessoa jovem !");
} else if ( faixaEtaria <= 64) {
  console.log("Olá, você é adulta")
} else {
  console.log("Olá, você é idosa")
}
// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária

const pessoa2 = {
  nome2: "Fulana",
  idade2: 77,
  altura2: 1.74,
  temCNH2: true,
  apelidos2: ["Fu", "Ful", "Lana"]
};

faixaEtaria2 = pessoa2.idade2
if (faixaEtaria2 < 18) {
  onsole.log("Olá, você é uma pessoa jovem !");
} else if ( faixaEtaria2 <= 64) {
  console.log("Olá, você é adulta")
} else {
  console.log("Olá, você é idosa")
}