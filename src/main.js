import { webs } from './data/webdev/webdev.js';
import { duplicateCards, createWeb } from './components/App.js';

let webdevs = webs.items; // ACCEDE AL ARRAY 'WEBS' DENTRO DEL OBJ 'DATA'
const duplicateCard = duplicateCards(webdevs);
duplicateCard.forEach((item, indice) => createWeb(item, indice)); // Usa una función flecha para pasar el índice

let cartas = document.querySelectorAll (".carta"); // Seleccionamos todas las cartas del juego
let card1 = "";
let card2 = "";

// PERMITIR AL USUARIO DESTAPAR las cartas de 2 en 2.
// DEJAR DESTAPADAS las cartas que COINCIDAN al destaparlas.
// INDICAR AL USUARIO QUE GANO CUANDO HAYA DESTAPADO TODAS las cartas.
for (let i = 0; i < cartas.length; i++) {
  cartas[i].addEventListener ("click", function () {
      let identificador = this.getAttribute ("id");
      let carta = document.getElementById(identificador);
      let front = carta.querySelector(".front");
      let back = carta.querySelector(".back");
    if (card1 === "") {
      card1 = identificador;
      console.log("1er turno. Identificador de la primera carta guardado en card1:", card1);
  // Voltear la carta: Si el elemento .front tiene display:block cambiarlo a display:none
    front.style.display = "block";
    back.style.display = "none";
    } else {
      card2 = identificador;
      console.log("2do turno. Identificador de la primera carta guardado en card2:", card2);
      // Voltear la carta
      front.style.display = "block";
      back.style.display = "none";
    
      if (card1 === card2) {
      console.log("¡Cartas iguales!");
      setTimeout(() => {
        front.style.display = "block";
        back.style.display = "none";
      }, 1000); // Cambia el tiempo según tus preferencias
    }
    // Si el elemento .front|.back tiene display:block cambiarlo a display:none
    card1 = "";
    card2 = "";
    }
    })
   }

   // Recorremos el array de cartas y les asignamos la función createWeb al evento click
  // Obtenemos el índice de la carta clickeada
  // Usamos document.querySelectorAll y accedemos al elemento que corresponda al índice
  // Crear una variable global 2 let c1= '' c2 donde se almacenan los identificadores de las cartas OK 1
  // Conocer su identificador al hacer click (indice) OK 2
  // saber si es la 1ra carta . validar si c1 esta vacio, si esta vacio es el 1er turno y se guarda el identificador en c1 3
  // si c1 no esta vacio es el segundo turno, tenems que guardar el identificador en c2 4
  // comparas los identificadores c1 === c2 OK 5
  // si son iguales dejarlas volteadas, si son diferentes ocultarlos 6
  // c1 y c2 tienen valores, se debe reiniciar OK 7 
  // Si el elemento .back tiene display:none cambiarlo a display:block
  //identificar los elementos, frente y reverso, preguntar por el atributo display, y cambiarlos de none a block y viceversa.