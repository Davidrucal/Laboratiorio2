// Obtener referencia al div
var backgroundDiv = document.getElementById("background-div");

// Lista de URLs de las imágenes de fondo
var imageUrls = [
  "url(img/taza.baner.jpeg)",
  "url(img/taza2.baner.jpeg)",
  "url(img/taza3.baner.jpeg)"
];

// Intervalo de tiempo en milisegundos entre cada cambio de imagen (por ejemplo, cada 5 segundos)
var intervaloTiempo = 3000;

// Índice de la imagen actual
var indiceImagenActual = 0;

// Función para cambiar la imagen de fondo
function cambiarImagenDeFondo() {
  // Obtener la URL de la siguiente imagen
  var imageUrl = imageUrls[indiceImagenActual];

  // Actualizar el estilo de fondo del div
  backgroundDiv.style.backgroundImage = imageUrl;

  // Incrementar el índice de la imagen actual
  indiceImagenActual = (indiceImagenActual + 1) % imageUrls.length;
}

// Iniciar el cambio de imágenes en intervalos regulares
setInterval(cambiarImagenDeFondo, intervaloTiempo);