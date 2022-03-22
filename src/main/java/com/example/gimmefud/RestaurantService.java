package com.example.gimmefud;

import com.example.gimmefud.data.Restaurant;
import com.example.gimmefud.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sound.midi.Soundbank;
import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepo;

    @PostConstruct
    public List<Restaurant> getRestaurant(){
        return restaurantRepo.findAll();
    }

}
