package com.example.gimmefud.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="restaurantowner")
public class Restaurantowner {


    @Id
    @Column(name="usernamer")
    public String usernamer;

    @Column(name="password")
    public String password;

    @Column(name="fname")
    public String fname;

    @Column(name="lname")
    public String lname;

    @Column(name="address")
    public String address;

    @Column(name="phone")
    public String phone_number;

    @Column(name = "roler")
    @Enumerated(EnumType.STRING)
    public Role roler;

    public Restaurantowner(String usernamer, String password, String fname, String lname, String address, String phone_number, Role roler) {
        this.usernamer = usernamer;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.phone_number = phone_number;
        this.roler = roler;
    }

    public Restaurantowner(){}
}
