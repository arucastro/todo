package com.sandro.todo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sandro.todo.domain.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
	
}
