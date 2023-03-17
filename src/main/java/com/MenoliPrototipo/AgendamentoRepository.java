package com.MenoliPrototipo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    // Métodos adicionais, se necessário
}
