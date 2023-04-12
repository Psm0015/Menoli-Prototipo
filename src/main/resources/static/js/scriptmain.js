function getDaysInMonth(year, month) {
    // Cria um novo objeto Date para o último dia do mês
    // Note que o mês é representado com índices de 0 a 11 (0 é janeiro, 1 é fevereiro, etc.)
    const lastDayOfMonth = new Date(year, month, 0);
    
    // Obtém o dia do mês do último dia (1 a 31)
    const daysInMonth = lastDayOfMonth.getDate();
    
    // Retorna a quantidade de dias no mês
    return daysInMonth;
  }
  function getDayOfWeek(year, month) {
    // Array com os nomes dos dias da semana
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    // Cria um novo objeto Date para o primeiro dia do mês
    const firstDayOfMonth = new Date(year, month-1, 1);
    
    // Obtém o valor numérico do dia da semana (0 a 6)
    const dayOfWeek = firstDayOfMonth.getDay();
    
    // Retorna o nome do dia da semana
    return daysOfWeek[dayOfWeek];
  }
  for (let i = 1; i <= 12; i++) {
    console.log(getDaysInMonth(2023,i))
    console.log(getDayOfWeek(2023,i))
    
  }