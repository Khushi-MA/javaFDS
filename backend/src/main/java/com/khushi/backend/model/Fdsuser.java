package com.khushi.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity (name = "fdsuser")// This tells Hibernate to make a table out of this class

public class Fdsuser {
    @Id
    @GeneratedValue
    private Long fdsid;
    private String fdsname;
    private String fdspassword;
    private String fdsusername;

    public Long getFdsid() {
        return fdsid;
    }

    public void setFdsid(Long fdsid) {
        this.fdsid = fdsid;
    }

    public String getFdsname() {
        return fdsname;
    }

    public void setFdsname(String fdsname) {
        this.fdsname = fdsname;
    }

    public String getFdspassword() {
        return fdspassword;
    }

    public void setFdspassword(String fdspassword) {
        this.fdspassword = fdspassword;
    }

    public String getFdsusername() {
        return fdsusername;
    }

    public void setFdsusername(String fdsusername) {
        this.fdsusername = fdsusername;
    }




}
