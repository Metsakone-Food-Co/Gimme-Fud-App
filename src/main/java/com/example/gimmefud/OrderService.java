package com.example.gimmefud;

import com.example.gimmefud.data.Courses;
import com.example.gimmefud.data.Order;
import com.example.gimmefud.data.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.PostConstruct;
import java.util.List;

@Service

public class OrderService {
    @Autowired
    OrderRepository orderRepo;

    @PostConstruct
    public void init() {


    }

    public List<Order> getallOrders(){
        return orderRepo.findAll();
    }

    public Order createOrder(@RequestBody Order order) {
        return orderRepo.save(order);

    }
    public Order updateOrder(@RequestBody Order order) {
        return orderRepo.save(order);

    }
}
