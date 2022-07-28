const mas = document.getElementById("aumentar-click");
const menos = document.getElementById("disminuir-click");

//target.adddEventListener("evento", "callback");
let contadorClicks = 0;
const h2 = document.getElementsByTagName("h2")[0];

mas.addEventListener("click", (evento) => {
   ++contadorClicks;
   h2.textContent = `Contador: ${contadorClicks}`;
   console.log(contadorClicks);
});

menos.addEventListener("click", (evento) => {
    --contadorClicks;
    h2.textContent = `Contador: ${contadorClicks}`;
    console.log(contadorClicks);
});
// -> Muestra el clic en la consola.   

/*
    PROPAGACION DE EVENTOS: los eventos se propagan a sus padres.
    PROPAGACIÓN BURBÚJA (event bubbling) --> hacia afuera.

    .stopPrpagation() --> evita la propagación de eventos.
*/