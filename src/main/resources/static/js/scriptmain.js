function getDaysInMonth(year, month) {
  numDias = new Date(year, month, 0).getDate();

  return numDias;
}
function getDayOfWeek(year, month) {
  // Array com os nomes dos dias da semana
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  const firstDayOfMonth = new Date(year, month, 1);

  const dayOfWeek = firstDayOfMonth.getDay();

  // Retorna o nome do dia da semana
  return daysOfWeek[dayOfWeek];
}
function getMonthName(month) {
  const nameOfMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return nameOfMonth[month]
}
data_hoje = new Date();
preenchecalendário(data_hoje);
function preenchecalendário(data) {
  tabela = "";
  const firstDayOfMonth = new Date(data.getFullYear(), data.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfMonth = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate();
  const daysInMonth = lastDayOfMonth;
  c = 0
  for (let i = 0; i < dayOfWeek; i++) {
    if (c == 0) {
      tabela += '<tr>'
    }
    tabela += `<td class="text-center"></td>`
    c++
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if (c == 0) {
      tabela += '<tr>'
    }
    tabela += `<td onclick = 'selecionardata(${i}, ${data.getMonth()}, ${data.getFullYear()})' value = '${i}' class="dian text-center">${i}</td>`
    c++
    if (c == 7) {
      c = 0
      tabela += '</tr>'
    }
  }
  if (c>0 && c < 7) {
    for (let i = 7; i > c; i--) {
      tabela += `<td class="text-center"></td>`
  
    }
  }
    
    if (c > 0 && c < 7) {
      tabela += '</tr>';
    }
  
  document.getElementById('anot').innerHTML = data.getFullYear();
  document.getElementById('anot').value = data.getFullYear();
  document.getElementById('mesnm').innerHTML = getMonthName(data.getMonth());
  document.getElementById('mesnm').value = data.getMonth();
  document.getElementById('dias').innerHTML = tabela
  const dia = String(data_hoje.getDate()).padStart(2, '0');
  const mes = String(data_hoje.getMonth() + 1).padStart(2, '0');
  const ano = String(data_hoje.getFullYear());
  document.getElementById("datatabela").innerHTML = `${dia}/${mes}/${ano}`

}
function botaoant() {
  const data = new Date(document.getElementById('anot').value, document.getElementById('mesnm').value - 1, 1);
  preenchecalendário(data);
}
function botaoprox() {
  const data = new Date(document.getElementById('anot').value, document.getElementById('mesnm').value + 1, 1);
  preenchecalendário(data);
}
function abotaoant() {
  const data = new Date(document.getElementById('anot').value - 1, document.getElementById('mesnm').value, 1);
  preenchecalendário(data);
}
function abotaoprox() {
  const data = new Date(document.getElementById('anot').value + 1, document.getElementById('mesnm').value, 1);
  preenchecalendário(data);
}
function selecionardata(diaa, mess, anoo) {
  const dataa = new Date(anoo,mess,diaa);
  const d = String(dataa.getDate()).padStart(2, '0');
  const m = String(dataa.getMonth() + 1).padStart(2, '0');
  const a = String(dataa.getFullYear());
  document.getElementById("datatabela").innerHTML = `${d}/${m}/${a}`
}
