package com.example.gimmefud.controllers;




import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")

public class UploadController {

    @PostMapping("/upload")
    public ResponseEntity<Map> UploadPhoto(@RequestParam("file") MultipartFile mfile) {
        Cloudinary cl = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "gimmefudapp",
                "api_key", "925247245444532",
                "api_secret", "wa5gubYGCS9krH_0XaT8paNhEyY",
                "secure", true
        ));

        String imageUrl = "";

        try {
            Map map = cl.uploader().upload(mfile.getBytes(), ObjectUtils.emptyMap());
            imageUrl = (String) map.get("url");
        } catch (IOException e) {
        }

        Map urlJson = Collections.singletonMap("img_url", imageUrl);

        return new ResponseEntity<Map>(urlJson, HttpStatus.OK);

    }


