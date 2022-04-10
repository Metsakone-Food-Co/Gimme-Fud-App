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
    public String ordername;

    @Column(name = "rname")
    public String rname;

    @Column(name = "username")
    public String username;

    @Column(name = "orderitems")
    public String orderitems;

    @Column(name = "totalsum")
    public String totalsum;



    public Order(String ordername, String rname, String username, String orderitems, String totalsum) {
        this.ordername = ordername;
        this.rname = rname;
        this.username = username;
        this.orderitems = orderitems;
        this.totalsum = totalsum;

    }

    public Order() {
    }
}
