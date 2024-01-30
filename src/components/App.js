// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
// import pokemon from '../data/pokemon/pokemon.js'; // console.log(pokemon);
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json()) //   .then(console.log) //   .catch(console.error);

//const App = () => {
 // const el = document.createElement('div');
 // el.className = 'App';
 // el.textContent = 'Hola mundo!';
//  return el;
//};
//export default App;

import { webs } from '../data/webdev/webdev.js';

//const App = () => {
let webdevs = webs.items; // ACCEDE AL ARRAY 'WEBS' DENTRO DEL OBJ 'DATA'
const websContainer = document.getElementById("root"); //Obtiene el elemento con ID "webs" del DOM y almacena 

function duplicateCards(webdevs) {
  let duplicateCard = [...webdevs];
  duplicateCard = duplicateCard.concat(webdevs);
  return duplicateCard;
}
const duplicateCard = duplicateCards(webdevs);

export function createWeb(web, indice) { // Añade el parámetro indice
  const webDiv = document.createElement("div"); 
  webDiv.classList.add("web-container");
  webDiv.classList.add("carta"); // Añade la clase carta
  webDiv.setAttribute("data-indice", indice); // Añade el atributo data-indice

  // Crea un elemento div para la carta
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

// Crea un elemento img para la cara frontal
const frontImg = document.createElement('img');
frontImg.classList.add("front");
frontImg.src = web.image;
frontImg.alt = "frontal";

// Crea un elemento img para la cara trasera
const backImg = document.createElement('img');
backImg.classList.add("back");
backImg.src = web.reverso; // La imagen del reverso de la carta
backImg.alt = "reverso";

// Añade los elementos img al elemento div de la carta
cardDiv.appendChild(frontImg);
cardDiv.appendChild(backImg);

// Añade el elemento div de la carta al elemento div del contenedor
  webDiv.appendChild(cardDiv);

  websContainer.appendChild(webDiv);
}
duplicateCard.forEach((item, indice) => createWeb(item, indice)); // Usa una función flecha para pasar el índice


let firstCard = null;
let secondCard = null;
// PERMITIR AL USUARIO DESTAPAR las cartas de 2 en 2.
export function uncoverCard(webdevs, indice) {
  if  (webdevs[indice].show || webdevs[indice].acertada) {
    return;
  }
  //Si no hay ninguna carta destapada, mostramos la 1ra
  if (firstCard == null){
    webdevs[indice].show = true;
    firstCard = indice;
  } else {
    //Si hay una carta destapada, mostramos la 2da
    webdevs[indice].show = true;
    secondCard = indice;
    //Comparar si las cartas son iguales
    if (webdevs[firstCard].route == webdevs[secondCard].route) {
      //Si son iguales, marcar como acertadas
      webdevs[firstCard].successful = true;
      webdevs[secondCard].successful = true;
      //Reiniciamos las variables de las cartas destapadas
      firstCard = null;
      secondCard = null;
    } else {
      //Si no son iguales, las volteamos despues despues de un segundo
      setTimeout(function() {
        webdevs[firstCard].show = false;
        webdevs[secondCard].show = false;
        //Reiniciamos las variables de las cartas destapadas
        firstCard = null;
        secondCard = null;        
      }, 1000);
    }
  }
}
//};

// DEJAR DESTAPADAS las cartas que COINCIDAN al destaparlas.
// INDICAR AL USUARIO QUE GANO CUANDO HAYA DESTAPADO TODAS las cartas.

//export default App;
