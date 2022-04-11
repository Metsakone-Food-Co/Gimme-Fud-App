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

    @Column(name = "order_date")
    public String date;

    public Order(String orderId, String rname, String username, String orderitems, String totalsum, String date) {
        this.orderId = orderId;
        this.rname = rname;
        this.username = username;
        this.orderitems = orderitems;
        this.totalsum = totalsum;
        this.date = date;
    }

    public Order() {
    }
}
