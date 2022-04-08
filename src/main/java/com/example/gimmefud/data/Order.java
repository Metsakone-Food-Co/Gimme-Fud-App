package com.example.gimmefud.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "restaurantorder")
public class Order {

    @Id
    @Column(name = "ordername")
    public String orderName;

    @Column(name = "rname")
    public String rname;

    @Column(name = "username")
    public String username;

    @Column(name = "orderitems")
    public String orderItems;

    @Column(name = "totalsum")
    public String totalSum;



    public Order(String orderName, String rname, String username, String orderItems, String totalSum) {
        this.orderName = orderName;
        this.rname = rname;
        this.username = username;
        this.orderItems = orderItems;
        this.totalSum = totalSum;

    }

    public Order() {
    }
}
