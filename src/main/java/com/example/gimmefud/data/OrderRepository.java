package com.example.gimmefud.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository  extends JpaRepository<Order,String> {
 List<Order>findByRname(String rname);
    List<Order>findByUsername(String username);

}
