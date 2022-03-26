package com.example.gimmefud.controllers;

import com.example.gimmefud.CustomerService;
import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import com.example.gimmefud.security.CustomerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepo;

    @Autowired
    CustomerService customerService;

    @Autowired
    CustomerSecurityService customerSecurity;

    @GetMapping("/customers")
    public List<Customer> getCustomers(){
        return customerService.getCustomers() ;
    }

    @GetMapping("/customer")
    public Customer getCustomer(@PathVariable String username){
        return customerRepo.findById(username).get();
    }

    @PostMapping("/customers")
    public Customer saveCustomerDetails(@RequestBody Customer customer) {
        return  customerRepo.save(customer);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login(@RequestBody Map<String,String> credentials){
        String token = customerSecurity.checkAuthentication(
                credentials.get("username"),
                credentials.get("password"));
        if(token == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>( Map.of("token", token), HttpStatus.OK);
    }



    @PutMapping("/customers")
    public Customer updateCustomerDetails(@RequestBody Customer customer) {
        return  customerRepo.save(customer);
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity<HttpStatus> deleteCustomerById(@PathVariable String username){
        customerRepo.deleteById(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}