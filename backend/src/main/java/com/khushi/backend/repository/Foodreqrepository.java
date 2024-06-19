package com.khushi.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.khushi.backend.model.Foodreq;

import java.util.List;

public interface Foodreqrepository extends JpaRepository<Foodreq, Long>{
    List<Foodreq> findByNgoidIsNull();
}
