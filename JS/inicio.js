
//musica empieza aqui

function Reproducir_audio() {
  var M = document.getElementById("miMusica");
    M.play();
  
}

//musica termina aqui*/
/*empieza animar el texto de la pagina*/
var textoAnimado = ["B", "I", "E", "N", "V", "E", "N", "I", "D", "@", " ",
  "A", "L", " ", "S", "I", "S", "T", "E", "M", "A", " ", "S", "O", "L", "A", "R"];
var pos_vector = 0;
let intervalo;
function animar() {
  intervalo = setInterval(pintarTexto, 150);
}
function pintarTexto() {
  var texto = document.getElementById("titulo");
  texto.innerHTML = texto.innerHTML + textoAnimado[pos_vector];
  pos_vector++;
  if (pos_vector >= textoAnimado.length) {
    clearInterval(intervalo);
  }

}
window.addEventListener("load", animar);

//empieza animar el texto2 de la pagina
var textoAnimado2 = ["U", "S", "A", " ", "L", "A", "S", " ", "F", "L", "E",
  "C", "H", "A", "S", " ", "P", "A", "R", "A", " ", "M", "O", "V", "E", "R", " ", "L", "A"," ","N","A","V","E"];
var pos_vector2 = 0;
let interval;
function animar2() {
  interval = setInterval(pintarTexto2, 150);
}
function pintarTexto2() {
  var texto2 = document.getElementById("titulo2");
  texto2.innerHTML = texto2.innerHTML + textoAnimado2[pos_vector2];
  pos_vector2++;
  if (pos_vector2   >= textoAnimado2.length) {
    clearInterval(interval);
  }

}
window.addEventListener("load", animar2);

//aqui empieza la nave espacial, juego
//aqui empieza la nave espacial, juego

const $player = document.getElementById("player");
const parentRect = document.body.getBoundingClientRect();
//anular la barra de scroll
document.body.style.overflow = "hidden";
//anular la barra de scroll hasta aqui

document.addEventListener("keydown", (e) => {
  Reproducir_audio();
  let speed = 2;//multiplicador de velocidad
  const step = 30; // Tamaño del paso
  const playerRect = $player.getBoundingClientRect();

  switch (e.code) {
    case "ArrowUp":
      if (playerRect.top > parentRect.top) {
        $player.style.top = (playerRect.top - step * speed) + 'px';
      }
      break;
    case "ArrowDown":
      if (playerRect.bottom < parentRect.bottom) {
        $player.style.top = (playerRect.top + step * speed) + 'px';
      }
      break;
    case "ArrowLeft":
      if (playerRect.left > parentRect.left) {
        $player.style.left = (playerRect.left - step * speed) + 'px';
      }
      break;
    case "ArrowRight":

      if (playerRect.right < parentRect.right) {
        $player.style.left = (playerRect.left + step * speed) + 'px';
      }
      break;
  }
});
