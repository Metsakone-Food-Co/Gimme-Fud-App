package com.example.gimmefud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class GimmeFudApplication {

	public static void main(String[] args) {
		SpringApplication.run(GimmeFudApplication.class, args);
	}

}
