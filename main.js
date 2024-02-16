import { webs } from "./data/webdev/webdev.js";
import { duplicateCards, createWeb } from "./components/App.js";

// LISTA DE VARIABLES
let webdevs = webs.items; // Accede al array 'WEBS' dentro del objeto 'ITEMS'
const duplicateCard = duplicateCards(webdevs);
duplicateCard.forEach((item, indice) => createWeb(item, indice)); // Usa una función flecha para pasar el índice
let cartas = document.querySelectorAll(".carta"); // Seleccionamos todas las cartas del juego
let card1 = ""; // Crear una variable global 2 let c1= '' c2 donde se almacenan los identificadores de las cartas
let card2 = "";
let gameStarted = false;
const startButton = document.getElementById("startbutton");
let moves = 0;
let timer = 0;
let timerInterval;

//PERMITIR AL USUARIO DESTAPAR 2-2. DEJAR DESTAPADAS cartas que COINCIDAN. INDICAR AL USUARIO QUE GANO al DESTAPAR TODAS/cartas.
function startGame() {
  if (!gameStarted) {
    for (let i = 0; i < cartas.length; i++) {
      // Recorremos el array de cartas
      cartas[i].addEventListener("click", function () {
        let identificador = this; // Conocer su identificador al hacer click (indice)
        let carta = cartas[i];
        let front = carta.querySelector(".front");
        let back = carta.querySelector(".back");

        if (card1 === "") {
          // Saber si es la 1ra carta.  Validar si c1 esta vacio,
          card1 = identificador; // Si esta vacio es el 1er turno y se guarda el identificador en c1
          // Voltear la carta: Si el elemento .front tiene display:block cambiarlo a display:none
          front.style.display = "block";
          back.style.display = "none";
        } else {
          card2 = identificador; // si c1 no esta vacio es el 2do turno, tenems que guardar el identificador en c2
          // Voltear la carta
          front.style.display = "block";
          back.style.display = "none";

          if (
            card1.getAttribute("data-indice") ===
            card2.getAttribute("data-indice")
          ) {
            // Comparas los identificadores c1 === c2
            cartasDestapadas += 2; // Incrementar el contador de cartas destapadas
          } else {
            const frontCard1 = card1.querySelector(".front");
            const backCard1 = card1.querySelector(".back");
            setTimeout(() => {
              frontCard1.style.display = "none";
              backCard1.style.display = "block";
              front.style.display = "none";
              back.style.display = "block";
            }, 1000); // Voltear carta en 2 segundos
          }
          // c1 y c2 tienen valores, se debe reiniciar
          card1 = "";
          card2 = "";
        }
        // Incrementa el contador de movimientos
        moves++;
        updateMovesDisplay();

        // Comienza el temporizador si aún no ha comenzado
        if (timer === 0) {
          startTimer();
        }

        youWinner();
      });
    }
    gameStarted = true;
  }
}

// CONJUNTO DE FUNCS QUE INDICAN EL INICIO DEL JUEGO, TEMPORIZADOR Y CONTEO DE MOVIMIENTOS O CLICKS
// Función para actualizar el contador de movimientos en el HTML
function updateMovesDisplay() {
  const movesDisplay = document.querySelector(".moves");
  movesDisplay.textContent = `Moves: ${moves} mov`;
}

// Función para iniciar el temporizador
function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    updateTimerDisplay();
  }, 1000); // Actualiza cada segundo
}

// Función para actualizar el temporizador en el HTML
function updateTimerDisplay() {
  const timerDisplay = document.querySelector(".timer");
  timerDisplay.textContent = `Time: ${timer} sec`;
}
startButton.addEventListener("click", startGame);

// FUNCION Y EVENTO PARA INDICAR AL USUARIO COMO GANADOR DE LA PARTIDA
// Variables para llevar el registro de las cartas destapadas y el total de cartas
let cartasDestapadas = 0;
const totalCartas = cartas.length;
// Función para verificar si todas las cartas han sido destapadas
function youWinner() {
  if (cartasDestapadas === totalCartas) {
    // Detener el temporizador
    clearInterval(timerInterval);
    // Seleccionar el elemento existente con la clase "win"
    const mensajeVictoria = document.querySelector(".win");
    if (mensajeVictoria) {
      mensajeVictoria.style.display = "block"; // Modificar el contenido
    }
  }
}
