import { webs } from "./data/webdev/webdev.js";
import { duplicateCards, createWeb } from "./components/App.js";

let webdevs = webs.items; // ACCEDE AL ARRAY 'WEBS' DENTRO DEL OBJ 'DATA'
const duplicateCard = duplicateCards(webdevs);
duplicateCard.forEach((item, indice) => createWeb(item, indice)); // Usa una función flecha para pasar el índice
let cartas = document.querySelectorAll(".carta"); // Seleccionamos todas las cartas del juego
let card1 = "";
let card2 = "";
console.log(cartas);
//PERMITIR AL USUARIO DESTAPAR 2 en 2.//DEJAR DESTAPADAS cartas que COINCIDAN.//INDICAR AL USUARIO QUE GANO al DESTAPAR TODAS/cartas.
for (let i = 0; i < cartas.length; i++) {
  // Recorremos el array de cartas
  cartas[i].addEventListener("click", function () {
    //let identificador = this.getAttribute("data-indice");
    let identificador = this;
    let carta = cartas[i];
    let front = carta.querySelector(".front");
    let back = carta.querySelector(".back");
    if (card1 === "") {
      card1 = identificador;
      console.log(
        "1er turno. Identificador de la primera carta guardado en card1:",
        card1
      );
      // Voltear la carta: Si el elemento .front tiene display:block cambiarlo a display:none
      front.style.display = "block";
      back.style.display = "none";
    } else {
      card2 = identificador;
      console.log(
        "2do turno. Identificador de la primera carta guardado en card2:",
        card2
      );
      // Voltear la carta
      front.style.display = "block";
      back.style.display = "none";

      if (card1.getAttribute("data-indice") === card2.getAttribute("data-indice")) {
        console.log("¡Cartas iguales!");
      } else {
        console.log(card1);
        const frontCard1 = card1.querySelector(".front");
        const backCard1 = card1.querySelector(".back");
        setTimeout(() => {
          frontCard1.style.display = "none";
          backCard1.style.display = "block";
          front.style.display = "none";
          back.style.display = "block";
        }, 2000); // Voltear carta en 2 segundos
      }
      // Si el elemento .front|.back tiene display:block cambiarlo a display:none
      card1 = "";
      card2 = "";
    }
  });
}
// Crear una variable global 2 let c1= '' c2 donde se almacenan los identificadores de las cartas OK 1
// Conocer su identificador al hacer click (indice) OK 2
// saber si es la 1ra carta . validar si c1 esta vacio, si esta vacio es el 1er turno y se guarda el identificador en c1 3
// si c1 no esta vacio es el segundo turno, tenems que guardar el identificador en c2 4
// comparas los identificadores c1 === c2 OK 5
// si son iguales dejarlas volteadas, si son diferentes ocultarlos 6
// c1 y c2 tienen valores, se debe reiniciar OK 7
// Si el elemento .back tiene display:none cambiarlo a display:block
// identificar los elementos, frente y reverso, preguntar por el atributo display, y cambiarlos de none a block y viceversa.

/* let gameTimer = 0;
  let numMovements = 0;

// Función para actualizar el temporizador
function actualizarTemporizador() {
  gameTimer++;
  document.getElementById('timer').textContent = `Time: ${gameTimer} sec`;
}

// Función para incrementar el conteo de movimientos
function cardMovements() {
  numMovements++;
  document.getElementById('moves').textContent = `Moves: ${numMovements} mov`;
}

// Asociar manejador de eventos al botón de inicio
document.addEventListener('DOMContentLoaded', function() {
 let startButton = document.getElementById('startButton'); 
  startButton.addEventListener('click', startGame);
});

// Función que inicia el juego
function startGame() {
  // Iniciar temporizador
  setInterval(actualizarTemporizador, 2000); // Cada 2 segundos

  // Restablecer conteo de movimientos
  numMovements = 0;
  cardMovements();
} */
