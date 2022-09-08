const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// inverta a ordem da array com .reverse()

const frutasRev = arrayExercicio.reverse()
console.log(frutasRev)

// coloque a array em ordem alfabética

const frutasOrd = arrayExercicio.sort();
console.log(frutasOrd)

// coloque a array em ordem alfabética decrescente z -> a

function frutasDec (itemEsquerdo, itemDireito) {
  if (itemEsquerdo > itemDireito) {
    return -1;
  }
  if (itemDireito > itemEsquerdo){
    return 1;
  }
   return 0;
}

const ordFrutas = arrayExercicio.sort(frutasDec)
console.log(arrayExercicio)