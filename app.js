let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiar();
  }
  return;
}

function limpiar() {
  //Para usar id por querySelector se pone # en el atributo
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (numerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(`p`, "Ya se sortearon todos los numeros posibles");
  } else {
  }

  //Si el numero generado esta en el array se crea uno nuevo, sino se agrega al array
  if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar input
  limpiar();
  //Resetear el juego
  condicionesIniciales();
  //deshabilitar boton de reset
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
