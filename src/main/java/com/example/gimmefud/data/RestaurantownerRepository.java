package com.example.gimmefud.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantownerRepository extends JpaRepository <Restaurantowner, String> {
}
