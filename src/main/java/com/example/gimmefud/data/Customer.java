package com.example.gimmefud.data;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    

    @Id
    @Column(name = "username")
    public String username;

    @Column(name = "password")
    public String password;

    @Column(name = "fname")
    public String firstName;

    @Column(name = "lname")
    public String lastName;

    @Column(name = "address")
    public String address;

    @Column(name = "phone")
    public String phoneNumber;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    public Role role ;

    public Customer(String username, String password, String firstName, String lastName, String address, String phoneNumber, Role role) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }

    public Customer(){}
}
