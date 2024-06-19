package com.khushi.backend.repository;

import  com.khushi.backend.model.Ngo;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface Ngorepository extends JpaRepository<Ngo, Long>{

    Optional<Ngo> findByNgousername(String ngousername);
}
