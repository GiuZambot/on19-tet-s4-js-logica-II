// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// Usando slice, corte da frase a palavra 'frase'

const selecao = frase.slice(0,11) + frase.slice(17, 37);
console.log(selecao)

const seleSub = frase.substring(0,11) + frase.substring(17, 37);
console.log(seleSub)
// Usando slice, corte da frase a palavra 'algumas'

const selecao2 = frase.slice(0,21) + frase.slice(29, 37);
console.log(selecao2)

const seleSub2 = frase.substring(0,21) + frase.substring(29, 37);
console.log(seleSub2)

// Usando slice, corte da frase as frase 'algumas palavras'

const selecao3 = frase.slice(0,21);
console.log(selecao3)

const seleSub3 = frase.substring(0,21)
console.log(seleSub3)
// Usando slice, corte da frase a palavra 'frase'

// exercico duplicado

// Faça o mesmo dos exercícios acima usando substring

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Usando slice, colete um pedaço da array do segundo item em diante

const frutas1 = arrayExercicio.slice(2,8);
console.log(frutas1)
// Usando slice, colete um pedaço da array entre o terceiro item e o quinto item
const frutas2 = arrayExercicio.slice(3,6)
console.log(frutas2)

// Usando slice, colete um pedaço da array: os dois últimos itens
const frutas3 = arrayExercicio.slice(5,8)
console.log(frutas3)