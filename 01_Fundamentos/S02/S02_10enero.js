function multiplicarDosNumeros(num1 = 0, num2 = 0) {
    console.log(`Digite el primer numero: ${num1} Digite el segundo numero: ${num2}`);
    // ${} -> Para escribir el contenido de una variable.
    // (altGR + } -> ``).
    return num1 * num2;
}
let resultadoMultiplicacion = multiplicarDosNumeros(10, 5);
console.log(resultadoMultiplicacion);
console.log(multiplicarDosNumeros(10));//Si faltaran parámetros y no inicializas -> 10 * undefined = NaN.

/*************************************************************************************************************/
// Función que reemplace la primera palabra de una frase por la palabra.
/* 
    1. Las palabras se separan entre sí a traves de espacios.
    2. La primera palabra es la que empieza al inicio de la frase y termina antes del primer espacio.
    3. "Borro" la primera palabra (Del inicio al primer espacio) y sustituyo con la palabra.
*/
function reemplazarPalabra(frase, palabra) {
    let indicePrimerEspacio = frase.indexOf(" ");
    let fraseSinPalabra = frase.slice(indicePrimerEspacio);
    let nuevaFrase = palabra.concat(fraseSinPalabra);
    return nuevaFrase;
}
resultado = reemplazarPalabra("Esta es una frase cualquiera modificada.", "Academlo");
console.log(resultado);
/*************************************************************************************************************/

// Arreglos: Estructura de datos, me permiten almacenar muchos datos a la vez.
//                          0         1        2        3   ...        
let arregloNombres = ["Brenda", "Vicky", "Erick", "Israel"]; // longitud = 4.
let longitudNombres = arregloNombres.length;
console.log(longitudNombres);
//  Indice del último arreglo = longitud - 1.

// Extraer un elemento en particular de un arreglo --> arreglo[índice].
let primerElemento = arregloNombres[0];
console.log(primerElemento);
let ultimoElemento = arregloNombres[longitudNombres - 1];
console.log(ultimoElemento);
console.log(arregloNombres[1000]); // Si el índice no existe -> undefined.

let arregloMatriz = [[1, 2], [2, 2]];
let primerNumero = arregloMatriz[0][0];
let ultimoNumero = arregloMatriz[1][1];
console.log(primerNumero);
console.log(ultimoNumero);