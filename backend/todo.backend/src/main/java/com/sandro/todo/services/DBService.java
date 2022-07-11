package com.sandro.todo.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandro.todo.domain.Todo;
import com.sandro.todo.repositories.TodoRepository;

@Service
public class DBService {
	
	@Autowired
	private TodoRepository todoRepository;

	public void instanciaBaseDeDados() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		Todo t1 = new Todo(null, "Combar de Ahri", "Acertar o charm", sdf.parse("11/07/2022"), false);
		Todo t2 = new Todo(null, "Combar de Akali", "Acertar o E", sdf.parse("11/07/2022"), false);
		Todo t3 = new Todo(null, "Combar de Katarina", "Nao ficar forte e perder em seguida", sdf.parse("11/07/2022"),
				false);
		
		todoRepository.saveAll(Arrays.asList(t1,t2,t3));

	}
}
