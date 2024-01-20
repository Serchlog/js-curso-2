//no aparece arreglar despues
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function consoleFunction() {
    console.log("El botón fue clicado");
}

function alertFunction() {
    alert("Yo amo JS");

}

function promptFunction() {
    let ciudadBrasil = prompt("Escribe una ciudad de Brasil");
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti <3`);
}

function sumaFunction() {
    let num1 = parseInt(prompt("Regalame un número"));
    let num2 = parseInt(prompt("Regalame otro número"));
    alert(num1+num2);
o
}
