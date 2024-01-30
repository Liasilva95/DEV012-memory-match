//import App from './components/App.js';
import { uncoverCard } from './components/App.js';
import { webs } from './data/webdev/webdev.js';
 //document.getElementById('root').appendChild(createWeb());

// PERMITIR AL USUARIO DESTAPAR las cartas de 2 en 2.
// DEJAR DESTAPADAS las cartas que COINCIDAN al destaparlas.

// Seleccionamos todas las cartas del juego
var cartas = document.querySelectorAll (".carta");
// Recorremos el array de cartas y les asignamos la función uncoverCard al evento click
for (let i = 0; i < cartas.length; i++) {
  cartas[i].addEventListener ("click", function () {
    // Obtenemos el índice de la carta clickeada
    let indice = this.getAttribute ("data-indice");
    // // Usamos document.querySelectorAll y accedemos al elemento que corresponda al índice
    let front = document.querySelectorAll (".front")[indice];
    let back = document.querySelectorAll (".back")[indice];
    // Si el elemento .front|.back tiene display:block cambiarlo a display:none
    if (front.style.display == "block") {
        front.style.display = "none";
    } else {
        front.style.display = "block";
    }
    // Si el elemento .back tiene display:none cambiarlo a display:block
    if (back.style.display == "none") {
        back.style.display = "block";
      } else {
        back.style.display = "none";
      }
    })
    //identificar los elementos, frente y reverso, preguntar por el atributo display, y cambiarlos de none a block y viceversa.
  }

// PERMITIR AL USUARIO DESTAPAR las cartas de 2 en 2.
let webdevs = webs.items;
let cardsClick = document.querySelectorAll (".carta");

  //Variable que almacena el # de cartas frontales
  let frontCards = 0;
  let firstCard = null;
  let secondCard = null;
  // Funcion que se ejecuta cuando el usuario hace click en una carta
  function cardClick (event) {
    let indice = parseInt(event.target.getAttribute("data-indice"), 10);
    console.log("Contenido de webdevs:", webdevs);
    // Si la carta esta en reverso y no es acertada, la volteamos
    if (!webdevs[indice].show && !webdevs[indice].successful) {
        webdevs[indice].show = true;
        //Incrementamos el # de cartas frontales
        frontCards++;
        //Si es la 1ra crta frontal, la guardamos en la variable
        if (frontCards === 1) {
            firstCard = indice;
        }
        //Si es la 2da carta frontal, la guardamos en la variable secondCard y llamamos a la funcion uncoverCard
        if (frontCards === 2) {
            secondCard = indice;
            uncoverCard (webdevs, secondCard);
        }
        if (frontCards === 2) {
            uncoverCard(webdevs, firstCard, secondCard);
            // Reiniciamos variables después de ejecutar la función uncoverCard
            frontCards = 0;
            firstCard = null;
            secondCard = null;
        }
    }
  }

// Seleccionamos todas las cartas del juego
// Recorremos el array de cartas y les asignamos el evento click
cardsClick.forEach(card => {
    card.addEventListener("click", cardClick);
  });  
//for (let i = 0; i < cardsClick.length; i++) {
  //cardsClick[i].addEventListener ("click", cardClick);

// DEJAR DESTAPADAS las cartas que COINCIDAN al destaparlas.
// INDICAR AL USUARIO QUE GANO CUANDO HAYA DESTAPADO TODAS las cartas.