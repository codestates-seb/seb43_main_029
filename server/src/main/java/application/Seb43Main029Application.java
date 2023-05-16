package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
@EnableScheduling     // 스케쥴러 기능 활성화
@EnableBatchProcessing  // 배치 기능 활성화
public class Seb43Main029Application {

	public static void main(String[] args) {SpringApplication.run(Seb43Main029Application.class, args);

	}

}
