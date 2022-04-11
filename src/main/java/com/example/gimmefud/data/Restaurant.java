package com.example.gimmefud.data;

import javax.persistence.*;

@Entity
@Table(name="restaurant")
public class Restaurant {

    @Id
    @Column(name="rname")
    public String rname;

    @Column(name="usernamer")
    public String usernamer;


    @Column(name="raddress")
    public String raddress;

    @Column(name="service_hours")
    public String service_hours;

    @Column(name="rtype")
    public String rtype;

    @Column(name="price_range")
    public String price_range;

    @Column(name="img_url")
    public String img_url;

    public Restaurant(String rname, String usernamer, String raddress, String service_hours, String rtype, String price_range, String img_url) {
        this.rname = rname;
        this.usernamer = usernamer;
        this.raddress = raddress;
        this.service_hours = service_hours;
        this.rtype = rtype;
        this.price_range = price_range;
        this.img_url = img_url;
    }

    public Restaurant(){}
}
