package com.example.gimmefud.controllers;

import com.example.gimmefud.data.Restaurantowner;
import com.example.gimmefud.data.RestaurantownerRepository;
import com.example.gimmefud.security.OwnerPwEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class RestaurantOwnerService {

    @Autowired
    RestaurantownerRepository ownerRepo;

    @Autowired
    OwnerPwEncoder encoder;

    public void init() {


    }
    @PostMapping("/restaurantowners")
    public Restaurantowner createOwner(@RequestBody Restaurantowner newOwner) {
        newOwner.password = encoder.encode(newOwner.password);
        return ownerRepo.save(newOwner);
    }
    @GetMapping("/restaurantowners")
    public List<Restaurantowner> getAllOwners() {
        return ownerRepo.findAll();
    }

    @GetMapping("/restaurantowner")
    public Restaurantowner getOwner(@PathVariable String usernamer) {
        return ownerRepo.findById(usernamer).orElse(null);
    }

}
