let modoNoche = false;

function cambiarModo() {
  modoNoche = !modoNoche;

  let bodyElement = document.body;
  let contadorElemento = document.getElementById('contador');

  if (modoNoche) {
    bodyElement.classList.add('modo-noche');
    contadorElemento.classList.add('modo-noche');
  } else {
    bodyElement.classList.remove('modo-noche');
    contadorElemento.classList.remove('modo-noche');
  }
}

function actualizarContador() {
  let contadorElemento = document.getElementById('contador');

  let contadorValor = parseInt(localStorage.getItem('contadorValor')) || 0;

  contadorValor++;

  let dias = Math.floor(contadorValor / (3600 * 24));
  let horas = Math.floor((contadorValor % (3600 * 24)) / 3600);
  let minutos = Math.floor((contadorValor % 3600) / 60);
  let segundos = contadorValor % 60;
  document.getElementById('dias').innerText = dias > 0 ? formatDigit(dias) + ' días ' : '';
  document.getElementById('horas').innerText = horas > 0 ? formatDigit(horas) + ' horas ' : '';
  document.getElementById('minutos').innerText = minutos > 0 ? formatDigit(minutos) + ' minutos ' : '';
  document.getElementById('segundos').innerText = segundos > 0 ? formatDigit(segundos) + ' segundos ' : '';

  localStorage.setItem('contadorValor', contadorValor);
}

function formatDigit(digit) {
  return digit < 10 ? '0' + digit : digit;
}

setInterval(actualizarContador, 1000);