package com.example.gimmefud.controllers;

import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepo;

    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return customerRepo.findAll() ;
    }

    @GetMapping("/customers/{customer_id}")
    public Customer getSingleCustomer(@PathVariable Integer customer_id){
        return customerRepo.findById(customer_id).get();
    }

    @PostMapping("/customers")
    public Customer saveCustomerDetails(@RequestBody Customer customer) {
        return  customerRepo.save(customer);
    }

    @PutMapping("/customers")
    public Customer updateCustomerDetails(@RequestBody Customer customer) {
        return  customerRepo.save(customer);
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity<HttpStatus> deleteCustomerById(@PathVariable Integer customerId){
        customerRepo.deleteById(customerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}