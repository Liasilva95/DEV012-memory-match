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

const websContainer = document.getElementById("root"); //Obtiene el elemento con ID "webs" del DOM y almacena 

export function duplicateCards(array) {
  let duplicateCard = [...array];
  duplicateCard = duplicateCard.concat(array);
  return duplicateCard;
}

export function createWeb(web, indice) { // Añade el parámetro indice
  const webDiv = document.createElement("div"); 
  webDiv.classList.add("web-container");
  webDiv.classList.add("carta"); // Añade la clase carta
  //webDiv.setAttribute("data-indice", indice); // Añade el atributo data-indice
  webDiv.setAttribute("data-indice", web.id);
  webDiv.setAttribute("id", web.id);
  
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

// INDICAR AL USUARIO QUE GANO CUANDO HAYA DESTAPADO TODAS las cartas.