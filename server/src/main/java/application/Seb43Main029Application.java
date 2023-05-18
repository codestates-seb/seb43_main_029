package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Seb43Main029Application {

	public static void main(String[] args) {
		SpringApplication.run(Seb43Main029Application.class, args);
	}

}