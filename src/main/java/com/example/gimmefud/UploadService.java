package com.example.gimmefud;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

public class UploadService {

    public String UploadImage (MultipartFile mfile) {

        String imageUrl = "";
        try {
            Cloudinary cl = new Cloudinary(ObjectUtils.asMap(
                    "cloud_name", "gimmefudapp",
                    "api_key", "925247245444532",
                    "api_secret", "wa5gubYGCS9krH_0XaT8paNhEyY",
                    "secure", true
            ));


            Map map = cl.uploader().upload(mfile.getBytes(), ObjectUtils.emptyMap());

            imageUrl = (String) map.get("url");
        } catch (IOException e) {
            imageUrl = "";
        }

        System.out.println();
        return imageUrl;

    }


}

