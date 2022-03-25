package com.example.gimmefud;


import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;


    @PostConstruct
    public void init(){
        List<Customer> customers = customerRepo.findAll();

        for(Customer c : customers){
            System.out.println(c.firstName);
        }
        List<Customer> cust = customerRepo.findByUsername("Seppo");

        for (Customer c : cust){
            System.out.println(c.username);
        }

    }
        public List<Customer> getCustomer(){
            return customerRepo.findAll();


    }
}
