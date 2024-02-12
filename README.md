# Memory Match Game

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones técnicas](#3-consideraciones-tecnicas)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Prototipo de alta fidelidad](#5-prototipo-de-alta-fidelidad)
* [6. Prototipo de baja fidelidad](#7-protipo-de-baja-fidelidad)

***

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)), también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_, es un juego de cartas en el que se colocan todas las cartas boca abajo sobre una superficie, en este caso de manera virtual permitiendo a la jugadora una experincia indivual. En cada turno, la jugadora voltea dos cartas con el objetivo de encontrar parejas que coincidan. ¡Es un desafío de memoria y concentración! 🃏🔍

![Concentration (card game)](https://user-images.githubusercontent.com/110297/135919005-66aefadb-c462-49e2-bf10-2374f2e47688.png)

_Imagen tomada de [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game))_.

## 2. Resumen del proyecto

En este proyecto construye una versión _web_ del juego _Memory Match_, en la
que una jugadora pueda jugar sola, en el navegador.

El producto diseñado para el juego Memory Match cumple con los siguientes puntos:

* Destapar cartas de 2 en 2: Los usuarios pueden voltear dos cartas en cada turno para encontrar parejas.
* Mantener cartas coincidentes destapadas: Si las cartas coinciden, permanecen visibles para el jugador.
* Mensaje de victoria: Cuando todas las cartas se han encontrado, se muestra un mensaje indicando que el usuario ha ganado.
* Responsive: La interfaz se adapta a diferentes dispositivos y tamaños de pantalla.
* Fundamentos de visual design: El diseño sigue principios como la coherencia, la legibilidad y la estética visual.
Y como hito opcional se agrego:
* Temporizador (time) y numero de movimientos (moves) en el juego.

## 3. Consideraciones técnicas

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── data
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── README.md
    │   └── webdev
    │       ├── webdev.js
    │       └── webdev.json
    ├── index.html
    ├── main.js
    └── style.css
```

### Primeros pasos

* ¿Quiénes son los principales usuarios de producto?

Los principales usuarios del juego Memory Match son jugadores de todas las edades. Este juego estimula la memoria y la concentración, y es ideal para toda la familia. ¡Ponte a prueba y encuentra las parejas ocultas!

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Los objetivos de los usuarios en relación con el juego Memory Match son:
Estimular la memoria: Los jugadores buscan mejorar su capacidad de recordar y asociar imágenes o símbolos.
Desarrollar la concentración: El juego requiere atención y enfoque para encontrar las parejas ocultas.
Entretenimiento y diversión: Los usuarios buscan disfrutar de un pasatiempo lúdico y desafiante.
Competir o superar récords: Algunos jugadores se motivan por lograr tiempos más rápidos o encontrar todas las parejas en menos movimientos.

* ¿Cuáles son los componentes principales de la interfaz y por qué?

La interfaz de usuario (UI) en un juego es esencial para la experiencia del jugador. Aquí están los componentes principales de la interfaz y su importancia:
Botones y controles: Los botones permiten a los jugadores interactuar con el juego. Los controles son cruciales para la jugabilidad y la navegación.
Menús: Los menús proporcionan opciones como “START NOW”. Son puntos de acceso para el juego.
Marcadores de numero de movmientos y temporizadores: Mantienen a los jugadores informados sobre su progreso y desafían su habilidad.
Animaciones y efectos visuales: Añaden dinamismo y realismo al juego, mejorando la inmersión.
Mensaje al ganar la partida: "YOU WON".
Diseño visual y coherencia: La apariencia general debe ser atractiva y coherente con el estilo del juego.

* ¿Cuándo utilizan o utilizarían el producto?

Los jugadores utilizan o utilizarían el juego de coincidencias en diversas situaciones:
Tiempo libre: Durante momentos de ocio, como en casa o en el transporte público, para relajarse y ejercitar la mente.
Descanso: Como una pausa mental entre tareas o estudios.
Competición amistosa: En reuniones familiares o con amigos, para desafiar a otros y ver quién encuentra más parejas.
Entrenamiento cognitivo: Algunos lo utilizan como parte de su rutina para mantener la agudeza mental.
Actividad educativa: En entornos escolares o terapéuticos para mejorar la memoria y la concentración.

## 4. Historias de usuario
* Interacción con 24 tarjetas: Los jugadores pueden interactuar con 24 cartas que muestran imágenes de programas y frameworks relacionados con JavaScript.
* Descubrimiento en pares: Al hacer clic en una carta, se revela. Si no hay ninguna carta descubierta, se descubren en pares.
* Comparación de cartas: Si ya se ha descubierto un par de cartas, se comparan. * Si coinciden, permanecen descubiertas.
* Volteo de cartas no coincidentes: Si las cartas no coinciden, se voltean nuevamente después de un segundo.
* Mensaje de victoria: Cuando todas las cartas se han descubierto, se muestra un mensaje de victoria.

## 5. Prototipo de alta fidelidad
![Producto final pc](./src/IMAGENES/PROTOTIPO%20FINAL.png)
![Producto final movil](./src/IMAGENES/PROTOTIPO%20MOVIL.png)

## 6. Prototipo de baja fidelidad
_Imagen tomada de [Figma](https://www.figma.com/file/LwL3BsNyyF4vK3lutnzYWs/Untitled?type=design&mode=design&t=aauUXTkHrzLXHCv0-0).  
![Producto inicial de referencia pc](./src/IMAGENES/PROTOTIPO%20ALTA%20FIDELIDAD%20MM.png)
Esta imagen es un piunto de referencia para mi producto de Memory Match, sin embargo se trabajo con un data distinta por defecto, motivo por el cual hubo una variacion en el fondo de la web asi como la seccion que contiene las cartas.
