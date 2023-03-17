package com.MenoliPrototipo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    // Métodos adicionais, se necessário
    List<Agendamento> findByData(LocalDate data);
}
