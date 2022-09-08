const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// imprima o nome da pessoa

console.log("Meu nome é ", pessoa.nome);

// imprima de maneira amigável se a pessoa possui CNH

console.log( "A informação de que eu tenho CNH é ", pessoa.temCNH);

// imprima o último apelido da pessoa

console.log("Meu apelido favorito é ", pessoa.apelidos[2])
// Troque o nome da pessoa e imprima, usando somente o objeto
pessoa.nome = "Sicrana";
console.log(pessoa)

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = "Feminino";
console.log(pessoa)