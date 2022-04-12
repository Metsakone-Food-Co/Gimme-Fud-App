package com.example.gimmefud.controllers;




import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.gimmefud.security.CustomerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;



@CrossOrigin
@RestController
@RequestMapping("/api/v1")

public class UploadController {

    @PostMapping("/upload")

    public String UploadImage (@RequestParam("file") MultipartFile mfile) throws IOException {
        Cloudinary cl = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "gimmefudapp",
                "api_key", "925247245444532",
                "api_secret", "wa5gubYGCS9krH_0XaT8paNhEyY",
                "secure", true
        ));

        String imageUrl = "";

        Map map = cl.uploader().upload(mfile.getBytes(), ObjectUtils.emptyMap());

        imageUrl = (String)map.get("url");


        System.out.println();
        return imageUrl;

    }
}


