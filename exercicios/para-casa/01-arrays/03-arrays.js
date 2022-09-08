// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'

const palavra = frase.includes("sou");
if (palavra) {
  console.log("Encontrei", palavra);
} else {
  console.log("Não encontrei", palavra);
}

// usando includes, verifique se a frase contém a palavra 'algumas'

const palavra2 = frase.includes("algumas")
if (palavra2) {
  console.log("Encontrei", palavra2);
} else {
  console.log("Não encontrei", palavra2);
}

// usando includes, verifique se a frase contém a palavra 'cachorro'

const palavra3 = frase.includes("cachorro")
if (palavra3) {
  console.log("Encontrei", palavra3);
} else {
  console.log("Não encontrei", palavra3);
}

// usando includes, verifique se a frase contém a palavra 'amanhã'
const palavra4= frase.includes("amanhã")
if (palavra4) {
  console.log("Encontrei", palavra4);
} else {
  console.log("Não encontrei", palavra4);
}




const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'

const fruta = arrayExercicio.includes("banana")

if (fruta) {
  console.log("Encontrei", fruta);
} else {
  console.log("Não encontrei", fruta);
}

// usando includes, verifique se a array contém a palavra 'figo'

const fruta2 = arrayExercicio.includes("figo");
if (fruta2) {
  console.log("Encontrei", fruta2);
} else {
  console.log("Não Encontrei", fruta2);
}
// usando includes, verifique se a array contém a palavra 'macarrão'
const fruta3 = arrayExercicio.includes("macarrão")
if (fruta3) {
  console.log("Encontrei", fruta3);
} else {
  console.log("Não encontrei", fruta3)
}