package com.khushi.backend.model;

import jakarta.persistence.*;
import java.sql.Timestamp;
import java.sql.Date;

@Entity (name = "foodreq")
public class Foodreq {
    @Id
    @GeneratedValue
    private Long foodreqid;

    @Column(nullable = false)
    private Long fdsuserid;

    private Long ngoid;

    @Column(nullable = false)
    private Timestamp date_of_req;

    @Column(nullable = false)
    private Date date_of_collection;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Integer days_perishable;

    @Column(nullable = false)
    private String type_of_food;

    // Getters and Setters
    public Long getFoodreqid() {
        return foodreqid;
    }

    public void setFoodreqid(Long foodreqid) {
        this.foodreqid = foodreqid;
    }

    public Long getFdsuserid() {
        return fdsuserid;
    }

    public void setFdsuserid(Long fdsuserid) {
        this.fdsuserid = fdsuserid;
    }

    public Long getNgoid() {
        return ngoid;
    }

    public void setNgoid(Long ngoid) {
        this.ngoid = ngoid;
    }

    public Timestamp getDate_of_req() {
        return date_of_req;
    }

    public void setDate_of_req(Timestamp date_of_req) {
        this.date_of_req = date_of_req;
    }

    public Date getDate_of_collection() {
        return date_of_collection;
    }

    public void setDate_of_collection(Date date_of_collection) {
        this.date_of_collection = date_of_collection;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getDays_perishable() {
        return days_perishable;
    }

    public void setDays_perishable(Integer days_perishable) {
        this.days_perishable = days_perishable;
    }

    public String getType_of_food() {
        return type_of_food;
    }

    public void setType_of_food(String type_of_food) {
        this.type_of_food = type_of_food;
    }
}