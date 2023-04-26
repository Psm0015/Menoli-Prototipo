function salvardados() {
    var data = document.getElementById('data').value;
    var hora = document.getElementById('hora').value;
    var nomePaciente = document.getElementById('nomePaciente').value;
    var telefone = document.getElementById('telefone').value;
    var dentista = document.getElementById('dentista').value;
    var procedimento = document.getElementById('procedimento').value;
    var valorProcedimento = document.querySelector('#valorProcedimento').value;
    var formaPagamento = document.getElementById('formaPagamento').value;
    var custoMaterial = document.getElementById('custoMaterial').value;
    var extratoPagamentoClinica = document.getElementById('extratoPagamentoClinica').value;
    var extratoPagamentoDentista = document.getElementById('extratoPagamentoDentista').value;

    // Create JavaScript object with form data
    var formData = {
        data: data,
        hora: hora,
        nomePaciente: nomePaciente,
        telefone: telefone,
        dentista: dentista,
        procedimento: procedimento,
        valorProcedimento: valorProcedimento,
        formaPagamento: formaPagamento,
        custoMaterial: custoMaterial,
        extratoPagamentoClinica: extratoPagamentoClinica,
        extratoPagamentoDentista: extratoPagamentoDentista
    };

    console.log(formData);

    $.ajax({
        url: '/agendamentos',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(formData),
        success: function (response) {
            $('#agendamentoModal').modal('hide')
            updttb();
            var data = document.getElementById('data').value = '';
            var hora = document.getElementById('hora').value = '';
            var nomePaciente = document.getElementById('nomePaciente').value = '';
            var telefone = document.getElementById('telefone').value = '';
            var dentista = document.getElementById('dentista').value = '';
            var procedimento = document.getElementById('procedimento').value = '';
            var valorProcedimento = document.querySelector('#valorProcedimento').value = '';
            var formaPagamento = document.getElementById('formaPagamento').value = '';
            var custoMaterial = document.getElementById('custoMaterial').value = '';
            var extratoPagamentoClinica = document.getElementById('extratoPagamentoClinica').value = '';
            var extratoPagamentoDentista = document.getElementById('extratoPagamentoDentista').value = '';
            
        },
        error: function () {
            // Handle error
            console.error('Failed to save form data');
        }
    });
    // console.log('Dados do formulário:\n' +
    // 'Data: ' + data + '\n' +
    // 'Hora: ' + hora + '\n' +
    // 'Nome do Paciente: ' + nomePaciente + '\n' +
    // 'Telefone: ' + telefone + '\n' +
    // 'Dentista: ' + dentista + '\n' +
    // 'Procedimento: ' + procedimento + '\n' +
    // 'Valor do Procedimento: ' + valorProcedimento + '\n' +
    // 'Forma de Pagamento: ' + formaPagamento + '\n' +
    // 'Custo do Material: ' + custoMaterial + '\n' +
    // 'Extrato de Pagamento da Clínica: ' + extratoPagamentoClinica + '\n' +
    // 'Extrato de Pagamento do Dentista: ' + extratoPagamentoDentista);
}

function listarAgendamentoDoDia(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = String(data.getFullYear());
    // Realiza a requisição Ajax
    $.get(`/agendamentos/${ano}-${mes}-${dia}`, function (res) {
        tabe = ""
        for (let index = 0; index < res.length; index++) {
            r = res[index]
            tabe += "<tr>"
            // tabela.innerHTML += `<td>${r.data}</td>`
            tabe += `<td>${r.hora}</td>`
            tabe += `<td>${r.nomePaciente}</td>`
            tabe += `<td>${r.telefone}</td>`
            tabe += `<td>${r.dentista}</td>`
            tabe += `<td>${r.procedimento}</td>`
            tabe += `<td>R$ ${r.valorProcedimento}</td>`
            tabe += `<td>${r.formaPagamento}</td>`
            tabe += `<td>R$ ${r.custoMaterial}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoClinica}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoDentista}</td>`
            tabe += `<td><i onclick="deletar(${r.id})" class="text-center fa fa-trash " style="font-size:24px;color:black;cursor: pointer;"></i></td>`
            tabe += "</tr>"
        }
        document.querySelector('#tbdata').innerHTML = tabe;
    });
}
function updttb() {
    $.get(`/agendamentos/${document.getElementById('datatabela').value}`, function (res) {
        tabe = ""
        for (let index = 0; index < res.length; index++) {
            r = res[index]
            tabe += "<tr>"
            // tabela.innerHTML += `<td>${r.data}</td>`
            tabe += `<td>${r.hora}</td>`
            tabe += `<td>${r.nomePaciente}</td>`
            tabe += `<td>${r.telefone}</td>`
            tabe += `<td>${r.dentista}</td>`
            tabe += `<td>${r.procedimento}</td>`
            tabe += `<td>R$ ${r.valorProcedimento}</td>`
            tabe += `<td>${r.formaPagamento}</td>`
            tabe += `<td>R$ ${r.custoMaterial}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoClinica}</td>`
            tabe += `<td>R$ ${r.extratoPagamentoDentista}</td>`
            tabe += `<td><i onclick="deletar(${r.id})" class="text-center fa fa-trash " style="font-size:24px;color:black;cursor: pointer;"></i></td>`
            tabe += "</tr>"
        }
        document.querySelector('#tbdata').innerHTML = tabe;
    });
}
function deletar(id) {
    $.ajax({
        url: `agendamentos/${id}`,
        type: 'DELETE',
        success: function (response) {
            updttb();
        }
    });
    
}