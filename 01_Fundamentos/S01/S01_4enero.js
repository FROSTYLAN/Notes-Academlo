// Este es un comentario de una línea.

/*
    Comentario
    de múltiples
    líneas
*/

/************************************************************************/

// PALABRAS RESERVADAS (let, var, const)

/************************************************************************/

//camelCase.
//let nombreDeLaVariable = dato; (let: scope local, reasignación).

let variableNumber = 19;
let variableNumberDecimal = 3.5;

let variableString = "Esto es una cadena de texto % . _ ";
let variableStringNumber = '100';
let variableStringConComillas = 'Mi libro favorito es: "La nausea"';

let variableBooleanVerdadera = true;
let variableBooleanFalsa = false;

console.log(variableString);

/************************************************************************/

// (var: scope global, reasignación).

var userName = "Charles Castillo";
console.log(userName);

userName = "Solange Saavedra";
console.log(userName);
/************************************************************************/

//(const: scope global, no reasignación).

const PI = 3.1416;
console.log(PI);

/************************************************************************/

/*
    (;) solo es necesario cuando la instrucción empieza con: () [] {}.
*/

/************************************************************************/

// TIPADO DINÁMICO: Puede cambiar el tipo de dato de las variables.

let foo = 15; // foo ahora es un número.
foo = "bar";  // foo ahora es un string.
foo = true;   // foo ahora es un booleano.