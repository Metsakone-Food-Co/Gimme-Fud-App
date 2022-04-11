package com.example.gimmefud.data;

import javax.persistence.*;

@Entity
@Table(name = "restaurantorder")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    public String orderId;

    @Column(name = "rname")
    public String rname;

    @Column(name = "username")
    public String username;

    @Column(name = "orderitems")
    public String orderitems;

    @Column(name = "totalsum")
    public String totalsum;


    public Order(String orderId, String rname, String username, String orderitems, String totalsum) {
        this.orderId = orderId;
        this.rname = rname;
        this.username = username;
        this.orderitems = orderitems;
        this.totalsum = totalsum;
    }

    public Order() {
    }
}
