package com.sandro.todo.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandro.todo.domain.Todo;
import com.sandro.todo.services.TodoService;

@RestController
@RequestMapping(value = "/todos")
public class TodoResource {
	
	
	@Autowired
	private TodoService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Todo> findById(@PathVariable Integer id){
		Todo obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	
	
	@GetMapping(value = "/open")
	public ResponseEntity<List<Todo>> listOpen() {//metodo que lista os afazeres nao finalizados
		List<Todo> list = service.findAllOpen();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/closed")
	public ResponseEntity<List<Todo>> listClosed() {//metodo que lista os afazeres finalizados
		List<Todo> list = service.findAllClosed();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping
	public ResponseEntity<List<Todo>> listAll() {//metodo que lista todos os afazeres
		List<Todo> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
}
