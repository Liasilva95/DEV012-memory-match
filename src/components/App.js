// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...

// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

//const App = () => {
 // const el = document.createElement('div');
 // el.className = 'App';
 // el.textContent = 'Hola mundo!';
//  return el;
//};
//export default App;

import { webs } from '../data/webdev/webdev.js';

const App = () => {
const webdevs = webs.items; // ACCEDE AL ARRAY 'WEBS' DENTRO DEL OBJ 'DATA'
const websContainer = document.getElementById("root"); //Obtiene el elemento con ID "webs" del DOM y almacena 

function createWeb(web) { //Define la funcion "createWeb" del DOM, toma un objeto "web" como parametro
  const webDiv = document.createElement("div"); //Crea un nuevo elemento "div" y almacena en la variable "webDiv"
  webDiv.classList.add("web-container");

  const img = document.createElement('img');
  
  img.src = web.image;
  img.alt = web.image;

  webDiv.appendChild(img);

  websContainer.appendChild(webDiv);
}

webdevs.forEach(createWeb); //Itera sobre el array "webs" y llama a la funcion "createWeb" para c/objeto en el array
};

export default App;
