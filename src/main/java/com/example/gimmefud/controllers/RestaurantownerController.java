package com.example.gimmefud.controllers;


import com.example.gimmefud.data.Restaurantowner;
import com.example.gimmefud.data.RestaurantownerRepository;
import com.example.gimmefud.security.OwnerPwEncoder;
import com.example.gimmefud.security.OwnerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class RestaurantownerController {

    @Autowired
    RestaurantownerRepository ownerRepo;

    @Autowired
     RestaurantOwnerService ownerService;

    @Autowired
    OwnerPwEncoder encoder;

    @Autowired
    OwnerSecurityService ownerSecurity;

    @GetMapping("/restaurantowners")
    public List<Restaurantowner> getAllOwners() {
        return ownerService.getAllOwners();
    }

    @GetMapping("/restaurantowner")
    public Restaurantowner getOwner(@PathVariable String usernamer) {
        return ownerRepo.findById(usernamer).get();
    }

    @PostMapping("/restaurantowners")
    public Restaurantowner createOwner(@RequestBody Restaurantowner newOwner) {;
        return ownerService.createOwner(newOwner);
    }

    @PutMapping("/restaurantowners")
    public Restaurantowner updateOwner(@RequestBody Restaurantowner updateOwner) {
        return ownerRepo.save(updateOwner);
    }

    @DeleteMapping("/restaurantowners/{rname}")
    public ResponseEntity<HttpStatus> deleteOwner(@PathVariable String rname) {
        ownerRepo.deleteById(rname);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/loginowner")
    public ResponseEntity<Map<String, String>> loginowner(@RequestBody Map<String, String> credentials) {
        String token = ownerSecurity.checkAuthentication(
                credentials.get("usernamer"),
                credentials.get("password"));
        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(Map.of("token", token), HttpStatus.OK);
    }
}
