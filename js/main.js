var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Ptss... Ptss...')
  .pauseFor(200)
  .start();

//Adivinanza
function myfunction(txt) { 
    document.getElementById("respuesta").innerHTML = txt
  } 

//form
const formulario = document.querySelector('#formulario');
const obtiene = (event) => {
event.preventDefault();
const datos = new FormData(event.target);

const datosTodos = Object.fromEntries(datos.entries());
console.log(JSON.stringify(datosTodos));
}

formulario.addEventListener('submit', obtiene);