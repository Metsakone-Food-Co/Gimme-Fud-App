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


    }

   public Customer findByUsername(String username){
        return customerRepo.findByUsername(username);
    }



    public List<Customer> getCustomer(){
        return customerRepo.findAll();


    }

}
