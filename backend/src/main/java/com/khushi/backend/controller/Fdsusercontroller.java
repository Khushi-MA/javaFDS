package com.khushi.backend.controller;

import com.khushi.backend.exception.Notfoundusername;
import com.khushi.backend.model.Fdsuser;
import com.khushi.backend.repository.Fdsuserrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.khushi.backend.exception.Notfoundbyidexception;
import com.khushi.backend.exception.Notfoundusername;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3001")

public class Fdsusercontroller {

    @Autowired
    private Fdsuserrepository fdsuserrepository;

    @PostMapping("/postfdsuser")
    Fdsuser newFdsuser(@RequestBody Fdsuser newFdsuser) {
        return fdsuserrepository.save(newFdsuser);
    }

    @GetMapping("/getallfdsusers")
    List<Fdsuser> getAllFdsusers() {
        return fdsuserrepository.findAll();
    }

    @GetMapping("/getfdsuser/{id}")
    Fdsuser getFdsuser(@PathVariable Long id) {
        return fdsuserrepository.findById(id)
                .orElseThrow(() -> new Notfoundbyidexception(id));
    }

    @GetMapping("/getfdsuserbyfdsusername/{fdsusername}")
    Fdsuser getFdsuserByFdsusername(@PathVariable String fdsusername) {
        return fdsuserrepository.findByFdsusername(fdsusername)
                .orElseThrow(() -> new Notfoundusername(fdsusername));
    }

}
