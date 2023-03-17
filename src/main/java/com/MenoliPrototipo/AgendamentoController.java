package com.MenoliPrototipo;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @GetMapping
    public ResponseEntity<?> listarAgendamentos() {
        try {
            return ResponseEntity.ok().body(agendamentoRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
        
    }
    @GetMapping("/{data}")
    public ResponseEntity<?> listarAgendamentoDodia(@PathVariable LocalDate data) {
        try {
            return ResponseEntity.ok().body(agendamentoRepository.findByData(data));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
        
    }

    @PostMapping
    public ResponseEntity<?> criarAgendamento(@RequestBody Agendamento agendamento) {
        try {
            agendamentoRepository.save(agendamento);
            return ResponseEntity.ok().body("Agendamento Realizado com Sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarAgendamento(@PathVariable Long id,
            @RequestBody Agendamento agendamentoAtualizado) {
        try {
            Agendamento agendamento = agendamentoRepository.findById(id).get();

            agendamento.setData(agendamentoAtualizado.getData());
            agendamento.setNomePaciente(agendamentoAtualizado.getNomePaciente());
            agendamento.setTelefone(agendamentoAtualizado.getTelefone());
            agendamento.setDentista(agendamentoAtualizado.getDentista());
            agendamento.setProcedimento(agendamentoAtualizado.getProcedimento());
            agendamento.setValorProcedimento(agendamentoAtualizado.getValorProcedimento());
            agendamento.setFormaPagamento(agendamentoAtualizado.getFormaPagamento());
            agendamento.setCustoMaterial(agendamentoAtualizado.getCustoMaterial());
            agendamento.setExtratoPagamentoClinica(agendamentoAtualizado.getExtratoPagamentoClinica());
            agendamentoRepository.save(agendamento);

            return ResponseEntity.ok().body("Agendamento Alterado com Sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarAgendamento(@PathVariable Long id) {
        try {
            Agendamento agendamento = agendamentoRepository.findById(id).get();
            agendamentoRepository.delete(agendamento);
            return ResponseEntity.ok().body("Agendamento deletado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
}
