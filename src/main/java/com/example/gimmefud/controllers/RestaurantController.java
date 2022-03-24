package com.example.gimmefud.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.gimmefud.data.Restaurant;
import com.example.gimmefud.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepo;


    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepo.findAll();
    }

    @GetMapping("/restaurants/{restaurant_id}")
    public Restaurant getSingleRestaurant(@PathVariable Integer restaurant_id){
        return restaurantRepo.findById(restaurant_id).get();
    }


    @PostMapping("/restaurants")
    public Restaurant createRestaurant(@RequestBody Restaurant newRestaurant){
        return restaurantRepo.save(newRestaurant);
    }

    @PutMapping("/restaurants")
    public Restaurant updateRestaurant(@RequestBody Restaurant updateRestaurant){
        return restaurantRepo.save(updateRestaurant);
    }

    @DeleteMapping("/restaurants/{restaurant_id}")
    public ResponseEntity<HttpStatus> deleteRestaurantById(@PathVariable Integer restaurant_id){
        restaurantRepo.deleteById(restaurant_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
