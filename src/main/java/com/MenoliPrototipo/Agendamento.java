package com.MenoliPrototipo;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private LocalDate data;

    @Column(nullable = false)
    private String nomePaciente;

    @Column(nullable = false)
    private String telefone;
  
    @Column(nullable = false)
    private String dentista;
    
    @Column(nullable = false)
    private String procedimento;
    
    @Column(nullable = false)
    private BigDecimal valorProcedimento;
    
    @Column(nullable = false)
    private String formaPagamento;
    
    @Column(nullable = false)
    private BigDecimal custoMaterial;
    
    @Column(nullable = false)
    private BigDecimal extratoPagamentoClinica;

    @Column(nullable = false)
    private BigDecimal extratoPagamentoDentista;
}
