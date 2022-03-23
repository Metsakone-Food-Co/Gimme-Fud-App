package com.example.gimmefud.controllers;

import com.example.gimmefud.RestaurantService;
import com.example.gimmefud.data.Restaurant;
import com.example.gimmefud.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;


    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getRestaurant();
    }

}
