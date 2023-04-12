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
    tabela += `<td class="text-center"></td>`
    c++
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if (c == 0) {
      tabela += '<tr>'
    }
    tabela += `<td value = '${i}' class="text-center">${i}</td>`
    c++
    if (c == 7) {
      c = 0
      tabela += '</tr>'
    }
  }
  for (let i = 7; i > c; i--) {
    tabela += `<td class="text-center"></td>`

  }
  document.getElementById('mesnm').innerHTML = getMonthName(data.getMonth());
  document.getElementById('mesnm').value = data.getMonth();
  document.getElementById('dias').innerHTML = tabela


}
function botaoant() {
  const data = new Date(2023, document.getElementById('mesnm').value - 1, 1);
  preenchecalendário(data);
}
function botaoprox() {
  const data = new Date(2023, document.getElementById('mesnm').value + 1, 1);
  preenchecalendário(data);
}