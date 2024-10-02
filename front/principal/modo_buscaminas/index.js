function definirGrid(tamano) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Limpiamos la cuadrícula actual

    // Obtener las dimensiones de la pantalla
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight - document.querySelector('.controls').offsetHeight;

    // Calcular el tamaño de cada celda para que toda la cuadrícula quepa en la pantalla
    const maxCellWidth = Math.floor(screenWidth / tamano);
    const maxCellHeight = Math.floor(screenHeight / tamano);
    const cellSize = Math.min(maxCellWidth, maxCellHeight) - 10; // Dejar un pequeño margen

    // Ajustar el número de columnas de la cuadrícula
    container.style.gridTemplateColumns = `repeat(${tamano}, ${cellSize}px)`;

    // Generar las celdas
    for (let i = 0; i < tamano * tamano; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celd');
        celda.style.width = `${cellSize}px`;
        celda.style.height = `${cellSize}px`;

        const main = document.createElement('main');
        main.style.width = `${cellSize}px`;
        main.style.height = `${cellSize}px`;

        // Añadir el evento de clic para cambiar el color y aplicar la animación
        main.addEventListener('click', function () {
            if (!main.classList.contains('clickeado')) {
                main.classList.add('main-flip'); // Aplicar la animación de giro
                // Esperar a que termine el giro para cambiar el color
                setTimeout(() => cambiarColor(main), 600); 
                main.classList.add('clickeado'); // Marcar como clickeado para que no se pueda hacer clic otra vez
            }
        });

        celda.appendChild(main);
        container.appendChild(celda);
    }
}

function cambiarColor(element) {
    // Elegir aleatoriamente entre rojo (60% de probabilidad) o verde (40% de probabilidad)
    const color = Math.random() < 0.6 ? 'clickeado-rojo' : 'clickeado-verde';
    
    // Aplicar la clase correspondiente
    element.classList.add(color);

    // Si el color es rojo, mostrar el popup
    if (color === 'clickeado-rojo') {
        mostrarPopup();
    }
}

function mostrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Mostrar el popup
}

function reiniciarJuego() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Ocultar el popup
    definirGrid(3); // Reiniciar el juego con cuadrícula 3x3
}

function cambiarTamano(tamano) {
    definirGrid(tamano);
}

// Por defecto, cargamos la cuadrícula 3x3
window.onload = function() {
    definirGrid(3);
};

// Ajustamos la cuadrícula cuando se cambia el tamaño de la ventana
window.onresize = function() {
    const currentGridSize = Math.sqrt(document.querySelectorAll('.celd').length); // Obtener el tamaño actual de la cuadrícula
    definirGrid(currentGridSize);
};
