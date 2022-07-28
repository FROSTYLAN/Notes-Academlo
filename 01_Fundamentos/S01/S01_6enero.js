// Diferencia simple (!=):
console.log(10 != 100); // 10 es diferente de 100.
console.log(20 != "20"); // False (cohersión de datos)
console.log(true != 1); // False (cohersión de datos)

// Diferencia estricta (!==):
// Evita la cohersión de datos.
console.log(10 !== 100); // true -> Son diferentes entre sí.
console.log(20 !== "20"); // true -> Diferente tipo de dato.
console.log(true !== 1); // true.
console.log("brenda" !== "Brenda"); // true -> Sensible a las mayus.

// Mayor que (>):
console.log(10 > 100); // False.
console.log(-100 > -150); // True.
console.log(12 > 10); // True.
console.log("brenda" > 100);
// False (Compara el valor de los carácteres)
console.log("brenda" > "BRENDA");
// Los valores mayus son menores a las minus.

// Menor que (<):
console.log(5 < 10); // True.
console.log(-50 < -100); // False.

// Mayor o igual que (>=):
console.log(10 >= 10); // True.
console.log(10 >= 5); // True.

// Menor o igual que (<=):
console.log(5 <= 5); // True.
console.log(10 <= 100); // True.
console.log(10 <= 5); // False.

/**********************************************************************/

// OPERADORES LÓGICOS:
// Nos ayudan a operar datos de tipo booleano.
const DATE1 = true; // Verdadero (V)
const DATE2 = false; // falso (F)

// Negación (!):
console.log(!DATE1); // true -> false.
console.log(!DATE2); // false -> true.

// AND (&&):
/*
    date1   date2   resultado
    true    true    true
    true    false   false
    false   true    false
    false   false   false
*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR (||):
/*
    date1   date2   result
    true    true    true
    true    false   true
    false   true    true
    false   false   false
*/
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// (<=) -> menor o igual que
let resultado1 = 10 < 10 || 10 === 10; // 10 <= 10.
let resultado2 = 10 < 10 && 10 === 10;

//AND operador de cortocircuito:
//Devuelve el primer falsy, o en caso de que ambos sean truthy,
// devuelve el último.
console.log(true && "gato");
console.log("gato" && "texto");
console.log(null && "");
console.log("0" && NaN);
/* 
falsy:
-0
" "
null
undefined
NaN

Truthy:
"0"
"false"
[]
{}
*/

//OR operador de cortocircuito:
//Devuelve el primer Truthy, o en caso de que ambos sean falsy,
// devuelve el último.
console.log(true || "gato");
console.log("gato" || "texto");
console.log(null || "");
console.log("0" || NaN);

/**********************************************************************/

/*
EJERCICIO 1:
Averiguar si una frase contiene una palabra o no, si lo contiene tu 
código debe de generar true, en caso contrario debe generar false.
*/
let phrase1 = "Esta es una prueba";
let word1 = "frase";

// Propiedades -> Caracteristicas de nuestros datos (dato.propiedad)
// length -> Cantidad de caracteres que conforman a la cadena de texto.
console.log(phrase1.length);
// index -> Lugar que ocupa cada caracter dentro de la cadena de texto.
// String [index] = caracter en la posición indicada.
console.log(phrase1[0]);
/*
Métodos de instancia: 
Son acciones que puedo  llevar a cabo sobre cadenas de texto.
String.metodo() = valor de retorno;
*/
let index = phrase1.indexOf(word1) !== -1;
