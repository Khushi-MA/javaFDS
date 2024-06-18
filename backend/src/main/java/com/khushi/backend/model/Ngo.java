package com.khushi.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity (name = "ngo")
public class Ngo {
    @Id
    @GeneratedValue
    private Long ngoid;
    private String ngoname;
    private String ngopassword;
    private String ngousername;

    public Long getNgoid() {
        return ngoid;
    }

    public void setNgoid(Long ngoid) {
        this.ngoid = ngoid;
    }

    public String getNgoname() {
        return ngoname;
    }

    public void setNgoname(String ngoname) {
        this.ngoname = ngoname;
    }

    public String getNgopassword() {
        return ngopassword;
    }

    public void setNgopassword(String ngopassword) {
        this.ngopassword = ngopassword;
    }

    public String getNgousername() {
        return ngousername;
    }

    public void setNgousername(String ngousername) {
        this.ngousername = ngousername;
    }




}


