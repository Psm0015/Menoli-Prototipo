package com.MenoliPrototipo;

import java.math.BigDecimal;
import java.time.LocalDate;

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
  
    private LocalDate data;
  
    private String nomePaciente;
  
    private String telefone;
  
    private String dentista;
  
    private String procedimento;
  
    private BigDecimal valorProcedimento;
  
    private String formaPagamento;
  
    private BigDecimal custoMaterial;
  
    private BigDecimal extratoPagamentoClinica;
}
