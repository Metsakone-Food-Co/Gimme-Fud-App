package com.example.gimmefud.controllers;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import com.example.gimmefud.CoursesService;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;

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
public class CoursesController {

    @Autowired
    CoursesService coursesService;



    /*@PostMapping("/courses/public")
    public ResponseEntity<Map> UploadPhoto (@RequestParam("file") MultipartFile mfile) {
        Cloudinary cl = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "gimmefudapp",
                "api key", "925247245444532",
                "api secret", "wa5gubYGCS9krH_0XaT8paNhEyY",
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
    }*/


    @GetMapping("/courses")
    public List<Courses> getAllCourses(){
        return coursesService.GetAllCourses() ;
    }

    @PostMapping("/courses")
    public Courses createCourse(@RequestBody Courses courses){
        return coursesService.createCourse(courses);
    }

    @GetMapping("/courses/{rname}")
    public Courses getCourse(@PathVariable String rname){return coursesService.GetCourse(rname);}


    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses courses) {
        return   coursesService.updateCourse(courses);
    }

    @DeleteMapping("/courses/{course_name}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String course_name){
      return coursesService.deleteCourseById(course_name);
    }


}