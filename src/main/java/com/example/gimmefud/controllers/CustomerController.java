package com.example.gimmefud.controllers;

import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepo;

    @GetMapping
    public List<Customer> getAllCustomers(){return customerRepo.findAll()  ;
    }


}