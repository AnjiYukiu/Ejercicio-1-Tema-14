const botonAlerta = document.querySelector("button")
botonAlerta.addEventListener("click", () => {
    alert("Click en el botón")
})

$("button").click(() => {
    console.log("Hola, estoy usando JQuery")
})