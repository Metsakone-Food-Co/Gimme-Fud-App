package com.example.gimmefud.controllers;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import com.example.gimmefud.CoursesService;
import com.example.gimmefud.UploadService;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;

import com.example.gimmefud.security.CustomerSecurityService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.yaml.snakeyaml.util.ArrayUtils;

import javax.print.attribute.standard.Media;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CoursesController {


    @Autowired
    CoursesService coursesService;

    @Autowired
    UploadService uploadService;




    @GetMapping("/courses")
    public List<Courses> getAllCourses(){
        return coursesService.getAllCourses() ;
    }


    @PostMapping("/courses")
    public Courses createCourse(@RequestBody Courses courses){
        return coursesService.createCourse(courses);
    }

    @GetMapping("/courses/{rname}")
    public List<Courses> getCourse(@PathVariable String rname)
    {return coursesService.getCourse(rname);}

    @PostMapping("/upload")
    public String imageUpload(@RequestParam("file") MultipartFile mfile){
        String img_url = uploadService.postImage(mfile);
        System.out.println(img_url);
        return img_url;
    }

    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses courses) {
        return   coursesService.updateCourse(courses);
    }

    @DeleteMapping("/courses/{course_name}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String course_name){
        return coursesService.deleteCourseById(course_name);
    }


}