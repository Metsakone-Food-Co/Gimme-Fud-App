package com.example.gimmefud;


import Data.Customer;
import Data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;


@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    @PostConstruct
    public void init(){
        Customer c = customerRepo.findById("1").orElse(null);

        if(c != null ){
            System.out.println("*******************"+c.firstName);
        }
    }

}