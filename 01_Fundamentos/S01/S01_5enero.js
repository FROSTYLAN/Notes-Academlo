/*
VALORES ESPECIALES EN LOS NÚMEROS:
Se consideran números pero no se comportan como tal.  

   -  NaN (Not a Number): No produce resultado.
   -  Infinity: Infinito positivo.
   -  -Infinity: Infinito negativo. 

*/

// typeof () : Nos dice el tipo de dato.

/*********************************************************************/

/* OPERADORES DE ASIGNACIÓN COMPUESTOS */

let userName = null; // (asignación)
console.log(userName);
//undefined : No está definido, carece de valor significativo.
//null : Carece de valor. Suele ser asignado de forma explícita.

let contador = 10;
console.log(contador);
contador += 5; // 10 + 5 (asignación de adición)
console.log(contador);
contador -= 3; // 15 - 3 (asignación de sustracción)
console.log(contador);
contador *= 2; // 12 * 2 (asignación de multiplicación)
console.log(contador);
contador /= 3; // 24 / 3 (asignación de división)
console.log(contador);

let number1 = 26;
let newNumber = 10;
newNumber += number1;
console.log(newNumber);

/*********************************************************************/

// parseInt () : 
let charlesAge= "18";
console.log(typeof charlesAge);
charlesAge = parseInt(charlesAge, 8); //2do arg : base octal.
console.log(typeof charlesAge);

/*********************************************************************/
// OPERADORES ARITMETICOS:

// Operador de suma:
let suma = 10 + 10;
console.log(suma);

// Operador de concatenación:
let sumaString = "10" + "10"; 
console.log(sumaSTring);

console.log(typeof suma);
console.log(typeof concatenarString);

// Cohersión de datos o conversión implícita:
let sumaStringNumber = 10 + "10";
console.log(sumaStringNumber); // Concatena.

// Operación de resta:
let number1 = 10;
let number2 = 5;
let resultadoResta = number1 - number2;
console.log(resultadoResta);

let restaString = "Esto es una cadena" - "palabra"; 
console.log(typeof restaString); //NaH.

let RestaBooleanos = true - false; // true: 1 - false: 0
console.log(restaBooleanos); // 0 (Tipo numérico)

// Operación de multiplicación:
let resultadoMultiplicacion = number1 * number2;
console.log(resultadoMultiplicacion);

console.log(number1 * "7"); // suma (cohersión de datos)
console.log(number1 * "gato"); // NaH

// Operación de división:
let resultadoDivision = number1 / number2;
console.log(resultadoDivision);

console.log("100" / "20"); // res numérico (Cohersión de datos)
console.log("Princesa" / 5); // NaH / 5
console.log(100 / 0); // Infinity (valor especial)

// Operación de resto:
let resultadoResiduo = number1 % number2;
console.log(resultadoResiduo);

console.log(20 % 3); //res: 2
console.log("10" % 3); // res: 1 (cohersión de datos)
console.log(5 % 10);

/*********************************************************************/

// OPERADORES UNARIOS:

// Operadores Negativo y Positivo Unario:
let negativo = -number1;
let positivo =+number2;

// Operadores Incremento  y Decremento:
console.log(++number1); // El incremento sucede antes.
console.log(number1++); // + 1 (Sucede al siguiente mov.)
console.log(number2--); // El decremento sucede antes.
console.log(--number2); // - 1 (Sucede al siguiente mov.)

/*********************************************************************/

// OPERADORES DE COMPARACIÓN:

//Comparación simple (==):
console.log(number1 == number2); // Compara igualdad (res tipo boolean)
console.log(100 == 100); // true.
console.log("sol" == "SOL"); // False.
console.log("100" == 100); // true. (cohersión de datos)
console.log(undefined == undefined); // true.
console.log(undefined == null); // true.
console.log(true == false); // false.
console.log(false == 0); // true.

//Comparación estricta (===):
// Revisa tambien el tipo de datos (Anula la cohersión de datos).
console.log("100" === 100); // false.
console.log(undefined === null); // false.
console.log(false === 0); // false.
