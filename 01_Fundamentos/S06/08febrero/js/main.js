// C R U D (create read update delete)

const nodosParagraph = document.getElementsByTagName("p");
// Selecciona todos los nodos coincidentes y crea un array.
// Si no coincide retorna un array vacío.
console.log(nodosParagraph);

nodosParagraph[0].innerText = "Este es un nuevo texto añadido con JS";
// -> Cambia el texto afectando el html. Ocasiona rederización (reflow).

nodosParagraph[1].textContent = "Esto tambien se modificó con JS";
// -> Cambia el texto sin afectar el html.