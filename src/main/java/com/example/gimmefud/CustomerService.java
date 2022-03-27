package com.example.gimmefud;


import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import com.example.gimmefud.data.Role;
import com.example.gimmefud.security.CustomerPwEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;


@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    @Autowired
    CustomerPwEncoder encoder;


    @PostConstruct
    public void init() {
/*
        customerRepo.save(new Customer("Jorma", encoder.encode("Jorma666"), "Jorma", "Jortikka", "Ilmarikuja 1","0500666666", Role.CUSTOMER ));
*/
  Customer c = customerRepo.findById("Niibi").orElse(null);
        System.out.println(c.address);

    }

    public Customer getCustomer(String username) {
        return customerRepo.findById(username).orElse(null);


    }

    public List<Customer> getCustomers() {
        return customerRepo.findAll();


    }
}

