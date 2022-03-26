package com.example.gimmefud.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.gimmefud.CustomerService;
import com.example.gimmefud.data.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Service
public class CustomerSecurityService {
    @Autowired
    CustomerService customerService;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Autowired
    CustomerPwEncoder encoder;

    public String checkAuthentication (String username, String password ){

       Customer c = customerService.getCustomer(username);
       if( c == null){
           return null;
       }

        return encoder.matches(password, c.password) ? createToken(c) : null;

}

    public String createToken(Customer c){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);

        return JWT.create()
                .withClaim("userId",c.username)
                .sign(alg);
    }

    public Customer validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtSecret);
        JWTVerifier verifier = JWT.require(alg).build();
        Customer customer = null;



        try {
            DecodedJWT jwt = verifier.verify(jwtToken);

            customer = new Customer();
            customer.username = jwt.getClaim("userId").asString();

        }catch(JWTCreationException e){}

        return customer;
    }


@Bean
    public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("*"));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH",
            "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type",
            "x-auth-token"));
    configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
    UrlBasedCorsConfigurationSource source = new
            UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);

    return source;
}


    }
