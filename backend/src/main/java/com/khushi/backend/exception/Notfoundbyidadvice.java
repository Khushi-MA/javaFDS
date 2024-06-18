package com.khushi.backend.exception;


import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;
@ControllerAdvice
public class Notfoundbyidadvice {

    @ResponseBody
    @ExceptionHandler(Notfoundbyidexception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handleNotfoundbyidexception(Notfoundbyidexception ex) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("message", ex.getMessage());
        return errorMap;
    }
}
