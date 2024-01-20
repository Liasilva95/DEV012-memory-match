//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
//export const renderItems = (webdev) => {
  //const createWebElement = (web) => {
    //const webDiv = document.createElement("div");

    //webDiv.innerHTML = `
    //"id": "${web.id}",
    //<img src="${web.image}" alt="${web.id}">
    //"style": "background-color: #F7DF1E;"
    //`;
    //return webDiv;
  //};

  //const lista = document.createElement("ul");
  //webdev.forEach((web) => {
  //const container = document.createElement("li");
  //Class li
  //container.classList.add("lis");

  //container.appendChild(createWebElement(web));
  //lista.appendChild(container);
//});
//return lista;
//}

//const App = () => {
 // const el = document.createElement('div');
 // el.className = 'App';
 // el.textContent = 'Hola mundo!';
//  return el;
//};
//export default App;

// Importar los datos desde el archivo JSON
import data from './data/webdev/webdev.json';

const App = () => {
  // Una función auxiliar para crear un elemento web con una imagen y un color de fondo
  const createWebElement = (item) => {
    return (
      <div key={item.id} style={{backgroundColor: item.bgColor}}>
        <img src={item.image} alt={item.id} />
      </div>
    );
  };

  // Una función que renderiza una lista de elementos web usando la función anterior
  const renderItems = (data) => {
    return (
      <ul>
        {data.items.map((item) => {
          return <li>{createWebElement(item)}</li>;
        })}
      </ul>
    );
  };

  // El componente JSX que devuelve la función App
  return (
    <div className="App">
      <h1>{data.name}</h1>
      {renderItems(data)}
    </div>
  );
};

export default App;
