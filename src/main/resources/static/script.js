const timeElapsed = Date.now();
const today = new Date(timeElapsed);
hoje = today.toLocaleDateString();

document.getElementById('Data_hj').innerHTML = hoje

function mostraratv(dia,mes,ano){
    console.log(dia)
    console.log(mes)
    console.log(ano)
}