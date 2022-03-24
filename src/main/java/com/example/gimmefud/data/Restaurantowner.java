package com.example.gimmefud.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="restaurantowner")
public class Restaurantowner {

    @Id
    @Column(name="owner_id")
    public Integer owner_id;

    @Column(name="username")
    public String username;

    @Column(name="password")
    public String password;

    @Column(name="fname")
    public String fname;

    @Column(name="lname")
    public String lname;

    @Column(name="address")
    public String address;

    @Column(name="phone_number")
    public String phone_number;

    public Restaurantowner(Integer owner_id, String username, String password, String fname, String lname, String address, String phone_number) {
        this.owner_id = owner_id;
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.phone_number = phone_number;
    }
    public Restaurantowner(){}
}
