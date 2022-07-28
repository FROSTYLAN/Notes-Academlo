/*
Callback (llamada de vuelta)

    Construir una casa
        - Paredes.
        - Acabados.
        - Pintar.
*/


function levantarParedes (siguientePaso){ // Segunda función ejecutada.
    console.log("Se estan levantando las paredes.");
    siguientePaso (pintarCasa);
}

function agregarAcabados (ultimoPaso){ // Tercera función ejecutada.
    console.log("Se estan agregando todos los acabados.");
    ultimoPaso();
}

function pintarCasa(){ // Uñtima función ejecutada.
    console.log("Se pinta la casa.");
    console.log("La casa es habitable.");
}



function construirCasa (primerPaso){ // Primero en ejecutarse (Función principal).
    primerPaso(agregarAcabados);
}

construirCasa(levantarParedes);


function prepararDesayuno(platillo, siguientePaso){
    console.log(`Estoy preparando ${platillo} para desayunar.`);
    console.log("...30 minutos despues...");

    siguientePaso();
}

function servirDesayuno(){
    console.log(`Sirviendo el desayuno que acaba de ser preparado`);
}

function ponerLunch(){
    console.log(`Meterlo el desayuno en tuppers para poder llevarlo como lunch`);
}

prepararDesayuno("HUevos revueltos", servirDesayuno);

prepararDesayuno("hot cakes", ponerLunch);


/* 
    {
        name: "Nombre del producto",
        precio: 100
    }
*/

let carrito = [];

function agregarProducto (producto, siguientePaso){
    carrito.push(producto);
    siguientePaso();
}

function sumarPrecios() {
    let total = 0;
    for (let i=0; i<carrito.length; i++){
        total += carrito[i].precio;
    }
    console.log(`El total de tu carrito es ${total}.`);
}

// Pasando la referencia a la declaración de la función como argumento.
agregarProducto({nombre: "Chocolates", precio: 100}, sumarPrecios);

// Pasando directamente una función anonima como argumento.
agregarProducto({ nombre: "Tequila", precio: 400 }, function (){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    console.log(`El total de tu carrito es ${total}.`);
});

// Pasar una función flecha.
agregarProducto({ nombre: "Helado", precio: 90 }, () => {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    console.log(`El total de tu carrito es ${total}.`);
});


// Métodos para arreglos:

let arregloNumeros = [5, 10, 12, 7, 22];


// forEach( Callbak(currentValue, index, array){} );
let retornoForEach = arregloNumeros.forEach(function (elementoActual) {
    if ((elementoActual%2) === 0){
        console.log(`${elementoActual} es par`);
    }else{
        console.log((`${elementoActual} es impar`));
    }
});
console.log(retornoForEach); // undefined --> forEach no tiene retorno.


// map( Callback(elementoActual,indice, array){} ); --> Retorna un array ejecutando la funcion en cada elemento.
let retornoMap = arregloNumeros.map(elementoActual => elementoActual * 2);
console.log(retornoMap); // map si tiene  retorno.


// filter( Callback(elementoActual){} ); --> Retorna un array con todos los elementos que cumplan la condición.
let retornoFilter = arregloNumeros.filter(elementoActual => (elementoActual % 2) === 0);
console.log(retornoFilter);

// find( Callback(elementoActual){} );  --> Retorna el primer elemento del array que cumpla la condición.
let retornoFind = arregloNumeros.find(elementoActual => elementoActual > 10)
console.log(retornoFind);