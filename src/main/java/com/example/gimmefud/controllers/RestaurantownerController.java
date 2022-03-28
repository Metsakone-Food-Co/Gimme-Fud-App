package com.example.gimmefud.controllers;


import com.example.gimmefud.data.Restaurantowner;
import com.example.gimmefud.data.RestaurantownerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class RestaurantownerController {

    @Autowired
    RestaurantownerRepository ownerRepo;

    @GetMapping("/restaurantowners")
    public List<Restaurantowner> getAllOwners(){
        return ownerRepo.findAll();
    }


    @PostMapping("/restaurantowners")
    public Restaurantowner createOwner(@RequestBody Restaurantowner newOwner){
        return ownerRepo.save(newOwner);
    }

    @PutMapping("/restaurantowners")
    public Restaurantowner updateOwner(@RequestBody Restaurantowner updateOwner){
        return ownerRepo.save(updateOwner);
    }

    @DeleteMapping("/restaurantowners/{rname}")
    public ResponseEntity<HttpStatus> deleteOwner(@PathVariable String rname){
        ownerRepo.deleteById(rname);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
