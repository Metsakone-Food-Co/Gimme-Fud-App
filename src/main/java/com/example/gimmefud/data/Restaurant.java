package com.example.gimmefud.data;

import javax.persistence.*;

@Entity
@Table(name="restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="restaurant_id")
    public Integer restaurant_id;

    @Column(name="owner_id")
    public Integer owner_id;

    @Column(name="rname")
    public String rname;

    @Column(name="raddress")
    public String raddress;

    @Column(name="service_hours")
    public String service_hours;

    @Column(name="rtype")
    public String rtype;

    @Column(name="price_range")
    public String price_range;

    public Restaurant(Integer restaurant_id, Integer owner_id, String rname, String raddress, String service_hours, String rtype, String price_range) {
        this.restaurant_id = restaurant_id;
        this.owner_id = owner_id;
        this.rname = rname;
        this.raddress = raddress;
        this.service_hours = service_hours;
        this.rtype = rtype;
        this.price_range = price_range;
    }
    public Restaurant(){}
}
