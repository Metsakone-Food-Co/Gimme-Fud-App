package com.example.gimmefud.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.gimmefud.controllers.RestaurantOwnerService;
import com.example.gimmefud.controllers.RestaurantownerController;
import com.example.gimmefud.data.Restaurantowner;
import com.example.gimmefud.data.RestaurantownerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OwnerSecurityService {


    @Autowired
    RestaurantOwnerService ownerService;
    @Autowired
    OwnerPwEncoder encoder;

    @Value("${jwt.secret}")
    private String jwtSecret;



    public String checkAuthentication (String usernamer, String password ){

        Restaurantowner o = ownerService.getOwner(usernamer);
        if( o == null){
            return null;
        }

        return encoder.matches(password, o.password) ? createToken(o) : null;

    }

    public String createToken(Restaurantowner o){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);

        return JWT.create()
                .withClaim("usernamer",o.usernamer)
                .sign(alg);
    }

    public Restaurantowner validateBearerToken(String bearer){
        if(bearer.startsWith("Bearer")){
            String token = bearer.substring("Bearer".length()+1 );
            return this.validateJwt(token);
        }
        return null;
    }

    public Restaurantowner validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        JWTVerifier verifier = JWT.require(alg).build();
        Restaurantowner owner = null;

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);

            owner= new Restaurantowner();
            owner.usernamer = jwt.getClaim("usernamer").asString();

        }catch(JWTCreationException e){}

        return owner;
    }




}

