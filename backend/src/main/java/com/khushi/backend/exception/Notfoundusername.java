package com.khushi.backend.exception;

public class Notfoundusername extends RuntimeException {
    public Notfoundusername(String username) {
        super("Could not find the entity with username: " + username);
    }
}