const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
// aqui eu chamei os elementos html e atribuir elas a uma variavel constante
const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;

  if (min < 10) min = "0" + min;

  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
}, 1000);
// no const relogio eu atribui algumas funções , uma repete uma ação em um intervalo de tempo e as outras que pegam o horário atual do sistema e atribui valores a ela retornando no final as variaveis iniciais.
