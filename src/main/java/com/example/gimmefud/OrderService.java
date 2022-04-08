package com.example.gimmefud;

import com.example.gimmefud.data.Order;
import com.example.gimmefud.data.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service

public class OrderService {
    @Autowired
    OrderRepository orderRepo;

    @PostConstruct
    public void init() {

        orderRepo.save(new Order("1","Osmo Rilli", "Ooke", "Osmo liha piirokka x3", "15 €"));
    }

}
