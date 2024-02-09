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

export function createWeb(web, indice) {
  // Añade el parámetro indice
  const webDiv = document.createElement("div");
  webDiv.classList.add("web-container");
  webDiv.classList.add("carta"); // Añade la clase carta
  webDiv.setAttribute("data-indice", indice); // Añade el atributo data-indice
  webDiv.setAttribute("data-indice", web.id);

  // Crea un elemento div para la carta
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // Crea un elemento img para la cara frontal
  const frontImg = document.createElement("img");
  frontImg.classList.add("front");
  frontImg.src = web.image;
  frontImg.alt = "frontal";

  // Crea un elemento img para la cara trasera
  const backImg = document.createElement("img");
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
