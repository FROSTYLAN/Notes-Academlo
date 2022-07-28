
const productos = [
    {
        imagenPrincipal: "https://picsum.photos/id/0/200/300",
        imagenFondo: "https://picsum.photos/id/1/200/300",
        nombre: "Computadora portatil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/1062/200/300",
        imagenFondo: "https://picsum.photos/id/1025/200/300",
        nombre: "Cobija para perro",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/111/200/300",
        imagenFondo: "https://picsum.photos/id/133/200/300",
        nombre: "Automovil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/250/200/300",
        imagenFondo: "https://picsum.photos/id/319/200/300",
        nombre: "Camara",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/30/200/300",
        imagenFondo: "https://picsum.photos/id/326/200/300",
        nombre: "Taza",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/75/200/300",
        imagenFondo: "https://picsum.photos/id/674/200/300",
        nombre: "Kilo de uva",
        precio: "1500",
    },
]



/*
    <div class="card">
        <div class="img-wrapper">
            <img class="principal-img" src="https://picsum.photos/200/300" alt="imagen">
            <img src="https://picsum.photos/id/175/200/300" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repellendus.</p>
        <button>Comprar</button>
    </div>

*/
const section = document.getElementsByTagName("section")[0]


function crearCard(productoInfo) {
    const card = document.createElement("div")
    card.classList.add("card")

    const imagesWrapper = document.createElement("div")
    imagesWrapper.classList.add("img-wrapper")

    const firstImg = document.createElement("img")
    firstImg.src = productoInfo.imagenPrincipal
    firstImg.classList.add("principal-img")

    const secondImg = document.createElement("img")
    secondImg.src = productoInfo.imagenFondo

    const paragraph = document.createElement("p")
    paragraph.textContent = productoInfo.nombre

    const button = document.createElement("button")
    button.textContent = "Comprar"

    card.appendChild(imagesWrapper)
    card.appendChild(paragraph)
    card.appendChild(button)

    imagesWrapper.appendChild(firstImg)
    imagesWrapper.appendChild(secondImg)

    return card
}

let fragmento = new DocumentFragment() // Me permite añadir fragmento de html (evita el reflow);

for (let i = 0; i < productos.length; i++) {

    let card = crearCard(productos[i])

    fragmento.appendChild(card)
}

section.appendChild(fragmento)



//FUNCIONES


//Funciones declaradas
/*
function nombreDeLaFunción( parametros ){
    //instrucciones
    return valorDeRetorno
}

nombreDeLaFunción( argumentos )
*/


//Funciones expresadas, expresión de funciones, funciones anonimas
/*
const variableQueGuardaLaFuncion = function(parametros){
    //instrucciones
    return valorDeRetorno
}

variableQueGuardaLaFuncion( argumentos )
*/


suma(5, 10)

function suma(num1, num2) {
    console.log(num1 + num2)
}

suma(2, 2)


//resta( 50, 10 )

const resta = function (num1, num2) {
    return num1 - num2
}

resta(10, 5)


//Función flecha
const funcionFlecha = (parametro1, parametro2) => {
    //instrucciones
    return valorDeRetorno
}
const funcionFlechaConUnParametro = parametro => {
    //instrucciones
    return valorDeRetorno
}

const funcionFlechaReturnImplicito = parametro => valorDeRetorno

const funcionFlechaSinParametro = () => valorDeRetorno

const restarDosNumeros = (num1, num2) => num1 - num2


//Funciones de orden superior
//-Reciben otras funciones como parametros
//-Devuelven otra función como valor de retorno 



function saludarUsuario(nombre) {
    console.log(`Hola ${nombre}! buenas noches.`)
}


function convertirAMayusculas(nombre) {
    console.log(nombre.toUpperCase())
}


//Funcion de orden superior
function obtenerNombre(callback) { //Se ejecuta primero
    let nombre = prompt("Ingresa es tu nombre")

    callback(nombre) // saludarUsuario(nombre)
}

obtenerNombre(saludarUsuario)

obtenerNombre(convertirAMayusculas)


//Callbacks
//Closures