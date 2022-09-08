// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexEncontrado = frase.indexOf("sou")
console.log(indexEncontrado)

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indexEncontrado2 = frase.indexOf("algumas")
console.log(indexEncontrado2)

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indexEncontrado3 = frase.indexOf("cachorro")
console.log(indexEncontrado3)

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];


// usando indexOf, verifique a posição da palavra 'banana'

const indexFruta = arrayExercicio.indexOf("banana");
console.log(indexFruta, arrayExercicio[indexFruta])

if (indexFruta > -1) {
  console.log(`Encontrei ${arrayExercicio[indexFruta]} na posição ${indexFruta}`);

} else {
  console.log(`Não Achei`)
}

// usando indexOf, verifique a posição da palavra 'figo'

const indexFruta2 = arrayExercicio.indexOf("figo")
console.log(indexFruta2, arrayExercicio[indexFruta2]);

if (indexFruta2 > -1) {
  console.log(`Encontrei ${arrayExercicio[indexFruta2]} na posição ${indexFruta2}`)
} else {
  console.log(`Não Achei`)
}

// usando indexOf, verifique a posição da palavra 'macarrão'

const indexFruta3 = arrayExercicio.indexOf("macarrão");
console.log(indexFruta3, arrayExercicio[indexFruta3]);

if (indexFruta3 > -1){
  console.log(`Encontrei ${arrayExercicio[indexFruta3]} na posição ${indexFruta3}`)
} else {
  console.log(`Não Achei`)
}