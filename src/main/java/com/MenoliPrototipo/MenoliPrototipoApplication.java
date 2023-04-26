package com.MenoliPrototipo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class MenoliPrototipoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MenoliPrototipoApplication.class, args);
	}
	
	@GetMapping("")
	public String home() {
		return "index.html";
	}

}
