package com.example.gimmefud;

import com.example.gimmefud.data.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class welcomeController  {

    @Autowired
    CustomerService customerService;
    @GetMapping("/testi")
    public List<Customer> welcome(){
        return customerService.getcustomer() ;
    }


}