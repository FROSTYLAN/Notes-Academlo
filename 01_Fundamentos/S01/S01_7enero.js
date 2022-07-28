let phrase2 = "Mi nueva frase";
let word2 = "gato";

let resultado2 = phrase2.indexOf(word2) !== -1;
console.log(resultado2);

/*
FUNCIONES: Bloques de código reutilizables que me permiten
llevar acabo un proceso específico.
*/

/*
function nombreDeLaFuncion (parametros){
    //intruccion
    return valorRetorno;
};
*/

function sumarNumeros(numero1, numero2) {
  // parametros
  let resultado = numero1 + numero2;
  return resultado;
}

let suma = sumarNumeros(10, 5); // argumentos

console.log(suma);
console.log(sumarNumeros(50, 100));
