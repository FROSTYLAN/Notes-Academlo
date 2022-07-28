
const arregloAnimales = [ "Gato", "Perro", "Hamster", "Conejo", "Jirafa" ]

//array.push( nuevoElemento ) agrega un nuevo elemento AL FINAL


let nuevaLongitudPush = arregloAnimales.push( "Tlacuache" ) //esto es una modificación, NO HAY REASIGNACIÓN
console.log( arregloAnimales )
console.log( `La nueva longitud es: ${ nuevaLongitudPush }` )

//arregloAnimales = [ "Delfin", "Panda" ] esto es una reasignación por lo tanto no es permitido


//arreglo.pop() elimina el ULTIMO elemento del arreglo

let elementoEliminado = arregloAnimales.pop()
console.log( arregloAnimales )
console.log( elementoEliminado )

//arreglo.unshift( nuevoElemento,... ) agrega uno o mas elementos AL INICIO del arreglo
let nuevaLongitudUnshift = arregloAnimales.unshift( "Zarigueya", "Panda", "Serpiente" )
console.log( arregloAnimales )
console.log( nuevaLongitudUnshift )

//arreglo.shift() elimina el PRIMER elemento
let elementoEliminadoShift = arregloAnimales.shift()
console.log( arregloAnimales )
console.log( elementoEliminadoShift )

//arreglo.splice( indiceInicio, cantidadDeElementoAEliminar, nuevoElemento1, nuevoElemento2... )

//Eliminar "Hamster del arreglo"
let indexHamster = arregloAnimales.indexOf( "Hamster" )
console.log( indexHamster )

let elementoEliminadoSplice = arregloAnimales.splice( indexHamster, 1 )
console.log( arregloAnimales )
console.log( elementoEliminadoSplice )

//Agregar elementos

let retornoSpliceNuevosElementos = arregloAnimales.splice( 2, 0, "Tlacuache", "Ajolote")
console.log( arregloAnimales )
console.log( retornoSpliceNuevosElementos )


//Eliminar "Hamster" y "Conejo", y añadir en su lugar "Ballena", "Cebra" "Camello"

arregloAnimales.splice( 2, 2, "Ballena", "Cebra", "Camello" )

/**************************************************************/
//                     MÉTODOS DE STRING
/**************************************************************/

// String.prototype[@@iterator]()

// Devuelve un objeto iterador que itera sobre los puntos de codigo de un String
// devolviendo cada punto como un valor String

const str = "Quiero ser el CEO de Apple";
const iterator = str[Symbol.iterator](); // symbol -> constructor.
let char = iterator.next(); // itera un valor de String.

while (!char.done && char.value !== " ") {
    console.log(char.value); // char.value -> valor de la letra.
    char = iterator.next();
}

// expected output: "Q"
//                  "u"
//                  "i"
//                  "e"
//                  "r"
//                  "O"

// Ejemplo usado for..
var str = "Quiero ser el CEO de Apple";

for (var v of str) // Itera en cada punto de la cadena.
    console.log(v); // expected output: "Q" "u" "i" "r" "o" " " "s" "e" "r" " " "e" ...

/*********************************************************************************************/

// String.prototype.at()

// Devuelve la unidad de código UTF-16 ubicada en el desplazamiento especificado.

const sentence = "Tengo 18 años";
let index = 5;
let charIndex = sentence.charAt(index);
console.log(charIndex);