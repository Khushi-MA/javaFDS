package com.khushi.backend.repository;

import com.khushi.backend.model.Fdsuser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Fdsuserrepository extends JpaRepository<Fdsuser, Long> {

    Optional<Fdsuser> findByFdsusername(String fdsusername);
}