package com.example.gimmefud;

import com.example.gimmefud.data.Restaurant;
import com.example.gimmefud.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sound.midi.Soundbank;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepo;

    @PostConstruct
    public void init(){
        Restaurant r = restaurantRepo.findById(1).orElse(null);

        if(r != null){
            System.out.println(r.rname);
        }
    }

}
