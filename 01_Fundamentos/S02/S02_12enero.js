
// ========> Condicionales - La sentencia if (...) evalúa la condición en los paréntesis, y si el resultado es true ejectua un bloque de código.

// if (true) {
//   // código
//   console.log('se ejecuta solo si se cumple la condición')
// }

// la Cláusula "else"

// if (false) {
//   ...
// } else {
//   console.log('se ejecuta solo cuando no se cumple la condición')
// }

// la cláusula else if - si queremos probar mas variantes de una condición usamos else if
// se pueden ejecutar mas bloques else if, y el útlimo else es opcional.

// if (condición) {
//   ...
// } else if (otra condicion) {
//   se evalúa esta condición si la primera no se cumple
// } else {
//   ...
// }

// Operador ternario - cuando necesitamos asignar una variable dependiendo de alguna condición

const isSend = false;
const btn = isSend ? 'loading...' : 'enviar';
console.log(btn);

// ejemplo de un ternario con varias condicionales

// OPERADORES TERNARIOS:

const edad = 17;
const message = (edad < 3)
    ? 'eres un bebe'
    : (edad < 18)
        ? 'eres muy joven'
        : (edad < 100)
            ? 'eres ya un adulto'
            : 'esa edad es inusual'; 
console.log(message);

// ========> Bucles
// while (mientras) - La condición es comprobada antes de cada iteración

// La sintaxis del bucle while
// while (condición) {
//   // código - cuerpo del bucle
// }

let i = 1
while (i < 4) {
  // Cada ejecución del cuerpo del bucle se llama iteración.
console.log(`Iteración: ${i}`)
i++
}

// La sintaxis del bucle while
// do {
//   // código - cuerpo del bucle
// } while (condición)

// do while - la condición es comprobada después de cada iteración
do {
 console.log(`Iteracion: ${i}`)
i++
} while (0)

// El bucle for

// for (incio; codición; paso) {
//   // cuerpo del bucle
// }

// declaracion de variable "en linea"
for (let i = 1; i <= 4; i++) {
console.log(i)
}

// let i = 0 se declara una sola vez al inicio
// -> (si condicion -> cuerpo de bucle y ejecuta el incremnto)
// -> (si condicion -> cuerpo de bucle y ejecuta el incremnto)
// -> (si condicion -> cuerpo de bucle y ejecuta el incremnto)
// -> (si condicion -> cuerpo de bucle y ejecuta el incremnto)
