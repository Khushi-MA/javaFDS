package com.khushi.backend.controller;

import com.khushi.backend.model.Ngo;
import com.khushi.backend.repository.Ngorepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.khushi.backend.exception.Notfoundbyidexception;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3002")
public class Ngocontroller {

    @Autowired
    private Ngorepository ngorepository;

    @PostMapping("/postngo")
    Ngo newNgo(@RequestBody Ngo newNgo) {
        return ngorepository.save(newNgo);
    }

    @GetMapping("/getallngos")
    List<Ngo> getAllNgos() {
        return ngorepository.findAll();
    }

    @GetMapping("/getngo/{id}")
    Ngo getNgo(@PathVariable Long id) {
        return ngorepository.findById(id)
                .orElseThrow(() -> new Notfoundbyidexception(id));
    }

}