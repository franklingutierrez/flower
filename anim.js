// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde el día en que te vi sentí", time: 9 },
  { text: "Como que ya te conocía", time: 13 },
  { text: "Un minuto fue suficiente", time: 15 },
  { text: "Y ya sentía quererte", time: 19 },
  { text: "Me encanta que seas tan ocurrente", time: 22 },
  { text: "De repente dices cosas que me vuelan la mente", time: 24 },
  { text: "Simplemente, pero siempre estás presente", time: 27 },
  { text: "Aunque no pueda verte", time: 33 },
  { text: "De locura, casi estamos igual", time: 35 },
  { text: "De un día a otro, me volví tu megafan", time: 40 },
  { text: "Y ya eres mi persona favorita", time: 45 },
  { text: "Cada minuto a tu lado es genial", time: 48 },
  { text: "Y no hay nadie en el mundo mundial", time: 52 },
  { text: "Que ame más que estar contigo", time: 54 },
  { text: "Cada momento lo haces especial", time: 57 },
  { text: "Tú eres mi persona favorita", time: 61 },
  { text: "Y aunque no siempre lo ando diciendo", time: 65 },
  { text: "Es buen momento de decirte que te quiero, te quiero", time: 67 },
  { text: "Te quiero y siempre así será", time: 70 },
  { text: "Creo", time: 79 },
  { text: "Que por más que pase y pase el tiempo", time: 81 },
  { text: "Aunque llueva o truene, nunca pasará lo nuestro", time: 84 },
  { text: "Al menos eso siento", time: 90 },
  { text: "De locura, casi estamos igual", time: 92 },
  { text: "De un día a otro, me volví tu megafan", time: 98 },
  { text: "Y ya eres mi persona favorita", time: 102 },
  { text: "Cada minuto a tu lado es genial", time: 106 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);