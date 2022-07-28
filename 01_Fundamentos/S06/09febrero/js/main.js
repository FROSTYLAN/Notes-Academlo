

/*
    Busqueda por clases
    document.getElementsByClassName("clase")

    Busqueda por Id
    document.getElementById("identificador")

    Busqueda por selector
    document.querySelector("selector")
*/

const cardsCollection = document.getElementsByClassName("card")
//console.log( cardsCollection )

const elementById = document.getElementById("products-section")
//console.log( elementById )

const elementWithSrc = document.querySelector("[src]")
console.log(elementWithSrc)

elementWithSrc.src = "https://picsum.photos/id/1019/200/300"

const cardsList = document.querySelectorAll("div.card")
//console.log( cardsList )

const title = document.querySelector("h1")
title.textContent = "Mi tiendita"
title.id = "main-title"

title.classList.add("nueva-clase")
title.classList.remove("mx-0")

title.classList.toggle("nueva-clase")
//console.log( title.classList )

title.classList.toggle("nueva-clase")
//console.log( title.classList )


const footer = document.createElement("footer")
//console.log( footer )

const body = document.getElementsByTagName("body")[0]
body.appendChild(footer)

const nav = document.createElement("nav")
body.prepend(nav)

nav.appendChild

const anchor = "<a href='https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML'>Este es un link</a>"

footer.insertAdjacentHTML("beforebegin", anchor)


footer.innerHTML = `<p>texto texto texto texto texto texto texto</p>
                    <p>texto texto texto texto texto texto texto</p>`

console.log(footer.innerHTML)

footer.innerHTML = `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend">Otro enlace</a>`


const articleCard = document.querySelector("article.card")

articleCard.remove()