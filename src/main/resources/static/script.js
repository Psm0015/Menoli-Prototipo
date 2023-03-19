const timeElapsed = Date.now();
const today = new Date(timeElapsed);
hoje = today.toLocaleDateString();

document.getElementById('Data_hj').innerHTML = hoje

function mostraratv(dia, mes, ano) {
    if (dia < 10) {
        dia = "0" + dia
    }
    if (mes < 10) {
        mes = "0" + mes
    }
    $.get(`/agendamentos/${ano}-${mes}-${dia}`, function (res) {
        tabe = ""
        for (let index = 0; index < res.length; index++) {
            r = res[index]
            tabe += "<tr>"
            // tabela.innerHTML += `<td>${r.data}</td>`
            tabe += `<td>${r.nomePaciente}</td>`
            tabe += `<td>${r.telefone}</td>`
            tabe += `<td>${r.dentista}</td>`
            tabe += `<td>${r.procedimento}</td>`
            tabe += `<td>R$ ${r.valorProcedimento}</td>`
            tabe += `<td>${r.formaPagamento}</td>`
            tabe += `<td>R$ ${r.custoMaterial}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoClinica}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoDentista}</td>`
            tabe += `<td><i onclick="deletar(${r.id})" class="fa fa-trash" style="font-size:24px;color:red;cursor: pointer;"></i></td>`
            tabe += "</tr>"
        }
        document.getElementById("tableday").innerHTML = tabe
    })
    document.getElementById('Data_hj').innerHTML = `${dia}/${mes}/${ano}`
}
function updatetb(data) {
    $.get(`/agendamentos/${data}`, function (res) {
        tabe = ""
        for (let index = 0; index < res.length; index++) {
            r = res[index]
            tabe += "<tr>"
            // tabela.innerHTML += `<td>${r.data}</td>`
            tabe += `<td>${r.nomePaciente}</td>`
            tabe += `<td>${r.telefone}</td>`
            tabe += `<td>${r.dentista}</td>`
            tabe += `<td>${r.procedimento}</td>`
            tabe += `<td>R$ ${r.valorProcedimento}</td>`
            tabe += `<td>${r.formaPagamento}</td>`
            tabe += `<td>R$ ${r.custoMaterial}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoClinica}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoDentista}</td>`
            tabe += `<td><i onclick="deletar(${r.id})" class="fa fa-trash" style="font-size:24px;color:red;cursor: pointer;"></i></td>`
            tabe += "</tr>"
        }
        document.getElementById("tableday").innerHTML = tabe
    })
    d = data.split("-")
    document.getElementById('Data_hj').innerHTML = `${d[2]}/${d[1]}/${d[0]}`
    
}
x = document.getElementsByClassName("fc-today fc-future")
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element.innerHTML)
    element.classList.remove('fc-today fc-future')
}
function opnmodal(id) {
    $('#' + id).modal('show')
}

function enviar() {
    Swal.fire({
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        allowOutsideClick: false
    })
    const data = document.querySelector('#data').value;
    const nomePaciente = document.querySelector('#nomePaciente').value;
    const telefone = document.querySelector('#telefone').value;
    const dentista = document.querySelector('#dentista').value;
    const procedimento = document.querySelector('#procedimento').value;
    const valorProcedimento = document.querySelector('#valorProcedimento').value;
    const formaPagamento = document.querySelector('#formaPagamento').value;
    const custoMaterial = document.querySelector('#custoMaterial').value;
    const extratoPagamentoClinica = document.querySelector('#extratoPagamentoClinica').value;
    const extratoPagamentoDentista = document.querySelector('#extratoPagamentoDentista').value;

    const agendamento = {
        data,
        nomePaciente,
        telefone,
        dentista,
        procedimento,
        valorProcedimento,
        formaPagamento,
        custoMaterial,
        extratoPagamentoClinica,
        extratoPagamentoDentista
    };

    const agendamentoJSON = JSON.stringify(agendamento);

    $.ajax({
        type: "POST",
        url: "/agendamentos",
        data: agendamentoJSON,
        contentType: "application/json",
        dataType: 'json',
        error: function (st) {
            if (st.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Agendamento Realizado!'
                })
                $('#agdnmodal').modal('hide')
                updatetb(data)
            }
        }
    });

}
function deletar(id) {
    Swal.fire({
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        allowOutsideClick: false
    })
    $.ajax({
        url: `agendamentos/${id}`,
        type: 'DELETE',

    });
    window.location.reload();
}