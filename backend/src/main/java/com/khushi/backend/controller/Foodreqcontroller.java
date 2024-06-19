package com.khushi.backend.controller;

import com.khushi.backend.model.Foodreq;
import com.khushi.backend.repository.Foodreqrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Timestamp;

import com.khushi.backend.exception.Notfoundbyidexception;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3002")

public class Foodreqcontroller {

    @Autowired
    private Foodreqrepository foodreqrepository;

    @PostMapping("/postfoodreq")
    Foodreq newFoodreq(@RequestBody Foodreq newFoodreq) {

        newFoodreq.setDate_of_req(new Timestamp(System.currentTimeMillis()));
        return foodreqrepository.save(newFoodreq);
    }

    @GetMapping("/getallfoodreqs")
    List<Foodreq> getAllFoodreqs() {
        return foodreqrepository.findAll();
    }

    @GetMapping("/getfoodreq/{id}")
    Foodreq getFoodreq(@PathVariable Long id) {
        return foodreqrepository.findById(id)
                .orElseThrow(() -> new Notfoundbyidexception(id));
    }

    @PutMapping("/updatefoodreq/{id}")
    Foodreq updateFoodreq(@RequestBody Foodreq newFoodreq, @PathVariable Long id) {
        return foodreqrepository.findById(id)
                .map(foodreq -> {
                    foodreq.setNgoid(newFoodreq.getNgoid());
                    return foodreqrepository.save(foodreq);
                }).orElseThrow(() -> new Notfoundbyidexception(id));

    }

    @DeleteMapping("/deletefoodreq/{id}")
    String deleteFoodreq(@PathVariable Long id) {
        if(!foodreqrepository.existsById(id)) {
            throw new Notfoundbyidexception(id);
        }
        foodreqrepository.deleteById(id);
        return "Deleted foodreq with id: " + id;
    }

}