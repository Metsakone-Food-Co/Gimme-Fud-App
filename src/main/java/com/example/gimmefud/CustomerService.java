package com.example.gimmefud;


import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import com.example.gimmefud.security.CustomerPwEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;


@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    @Autowired
    CustomerPwEncoder encoder;


    @PostConstruct
    public void init(){
/*
        customerRepo.save(new Customer("Niibi", encoder.encode("Niibi"), "Niko", "Naumanen", "Ilmarikuja 1","0500666666" ));
*/

    }




    public List<Customer> getCustomer(){
        return customerRepo.findAll();


    }

}
