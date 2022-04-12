package com.example.gimmefud.data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "restaurantorder")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    public String order_id;

    @Column(name = "rname")
    public String rname;

    @Column(name = "username")
    public String username;

    @Column(name = "orderitems")
    public String orderitems;

    @Column(name = "totalsum")
    public String totalsum;

    @Column(name = "order_date")
    public String order_date;

    public Order(String order_id, String rname, String username, String orderitems, String totalsum, String order_date) {
        this.order_id = order_id;
        this.rname = rname;
        this.username = username;
        this.orderitems = orderitems;
        this.totalsum = totalsum;
        this.order_date = order_date;
    }

    public Order() {
    }
}
