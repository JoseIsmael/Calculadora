let pantalla = document.getElementById('pantalla');

function agregar(valor) {
  if (pantalla.value === "0") {
    pantalla.value = valor;
  } else {
    pantalla.value += valor;
  }
}

function limpiar() {
  pantalla.value = "0";
}

function calcular() {
  try {
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
  } catch (error) {
    pantalla.value = "Error";
  }
}

function cuadrado() {
  try {
    let valor = eval(pantalla.value);
    pantalla.value = Math.pow(valor, 2);
  } catch (error) {
    pantalla.value = "Error";
  }
}

function aleatorio() {
  let random = Math.floor(Math.random() * 100);
  pantalla.value = random;
}
