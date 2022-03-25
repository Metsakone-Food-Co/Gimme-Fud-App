package com.example.gimmefud.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="restaurantowner")
public class Restaurantowner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="owner_id")
    public Integer owner_id;

    @Column(name="username")
    public String username;
    @JsonIgnore // Blokkaa ettei selain näytä salasanaa
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
