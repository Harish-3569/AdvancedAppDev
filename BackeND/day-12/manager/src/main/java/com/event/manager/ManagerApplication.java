package com.event.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Event Manager",
				version = "0.0.1",
				description = "Organising corporate events",
				contact = @Contact(
						name = "Harish Kumar S",
						email = "727721euit049@skcet.ac.in"
						)
				)
		)


public class ManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagerApplication.class, args);
	}

}
