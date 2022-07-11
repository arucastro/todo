package com.sandro.todo;

import java.text.SimpleDateFormat;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sandro.todo.domain.Todo;

@SpringBootApplication
public class Application implements CommandLineRunner {
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		Todo t1 = new Todo(null, "Combar de Ahri", "Acertar o charm", sdf.parse("11/07/2022"),false);
		Todo t2 = new Todo(null, "Combar de Akali", "Acertar o charm", sdf.parse("11/07/2022"),false);
		Todo t3 = new Todo(null, "Combar de Katarina", "Acertar o charm", sdf.parse("11/07/2022"),false);
		
		
		
		
	}

}
