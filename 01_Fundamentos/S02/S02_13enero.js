/**************************************************/
//                   OBJETOS
/*************************************************/

let variableObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo: function (parametros) {
        //Instrucciones.
    },
    otroMetodo(parametro) {
        //Instrucciones.
    }
}

let objetoUsuario = {
    nombre: 'Charles',
    apellidos: "Castillo Rosas",
    edad: 18,
    pasatiempos: ['programar', 'Tocar guitarra', 'Jugar LOL'],
    mascota: {
        especie: 'Perro',
        color: 'Plomo',
        nombre: 'Princesa',
    },
    estaVacunado: true,
    saludar: function () {
        console.log("hola mundo, soy Charles!");
    }
}

// Sacar el valor de una propiedad:

// objeto.propiedad -> sintaxis del punto.
let usuarioEdad = objetoUsuario.edad;
console.log(usuarioEdad);

// objeto["propiedad"] -> sintaxis del arreglo.
let usuarioNombre = objetoUsuario['nombre']
console.log(usuarioNombre);

let primerPasatiempo = objetoUsuario.pasatiempos[0];
console.log(primerPasatiempo);

let nombreMascota = objetoUsuario.mascota['nombre'];
console.log(nombreMascota);

objetoUsuario.saludar();

objetoUsuario.nombre = "otro nombre";
objetoUsuario.estaVacunado = false;
console.log(objetoUsuario);

// Añadir propiedades:
// new objeto.propiedadAñadir
objetoUsuario.bandaFavorita = "Morat";
let bandaFavorita = objetoUsuario.bandaFavorita;
console.log(bandaFavorita);

// eliminar propiedades:
// delete objeto.propiedadEliminar
delete objetoUsuario.nombre;
console.log(objetoUsuario);

/**************************************************/
//                CURIOSIDADES
/*************************************************/

// Dos objetos nunca van a ser iguales.
let objeto1 = {
    propiedad1: "valor1",
    propiedad2: 100
}

let objeto2 = {
    propiedad1: "valor1",
    propiedad2: 100
}
console.log(objeto1 == objeto2); // false (para los arreglos tambien aplica).

// En este caso da true porque en realidad se trata de un solo objeto.
let objeto1 = {
    propiedad1: "valor1",
    propiedad2: 100
}
let objeto2 = objeto1;
console.log(objeto1 === objeto2); // true.
// Lo que se haga en el objeto1 se refleja en el objeto2, ya que es el mismo objeto.

/**************************************************/
//                EJEMPLO
/*************************************************/
// Extraer los emails de este array.

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]
let emails = [];

for (let i = 0; i < users.length; i++) {
    let email = users[i].email;
    emails.push(email);
}

console.log(emails);