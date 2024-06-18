package com.khushi.backend.exception;

public class Notfoundbyidexception extends RuntimeException{
    public Notfoundbyidexception(Long id) {
        super("Could not find the entity with id: " + id);
    }
}
