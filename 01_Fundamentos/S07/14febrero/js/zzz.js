const contenedor = document.querySelector("#contenedor");
const h2 = document.getElementsByTagName("h2")[0];
let contadorClicks = 0;

contenedor.addEventListener("click", (evento) => {
    if (evento.target.id === "aumentar-click"){
        ++contadorClicks;
        h2.textContent = `Contador: ${contadorClicks}`;
    } else if (evento.target.id === "disminuir-click" && contadorClicks>0){
        --contadorClicks;
        h2.textContent = `Contador: ${contadorClicks}`;
    }
    evento.stopPropagation();
});
/*******************************************/
const body = document.querySelector("body");
body.addEventListener("click",(evento) =>{
    console.log("Click sobre el body");
});
/*******************************************/