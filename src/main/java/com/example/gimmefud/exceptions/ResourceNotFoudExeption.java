package com.example.gimmefud.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoudExeption extends RuntimeException{

    public ResourceNotFoudExeption(String message){
        super(message);
    }
}
