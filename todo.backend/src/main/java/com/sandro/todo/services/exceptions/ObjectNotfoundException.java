package com.sandro.todo.services.exceptions;

public class ObjectNotfoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public ObjectNotfoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ObjectNotfoundException(String message) {
		super(message);
	}
	
	
	
}
