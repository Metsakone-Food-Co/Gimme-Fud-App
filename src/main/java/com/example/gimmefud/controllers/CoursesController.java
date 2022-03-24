package com.example.gimmefud.controllers;

import com.example.gimmefud.data.Courses;
import com.example.gimmefud.data.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/courses")
public class CoursesController {

    @Autowired
    CoursesRepository coursesrepo;

    @GetMapping
    public List<Courses> getAllCourses(){
        return coursesrepo.findAll() ;
    }

    @GetMapping("/courses/{id}")
    public Courses getSingleCourse(@PathVariable Integer coursesId){
        return coursesrepo.findById(coursesId).get();
    }

    @PostMapping("/courses")
    public Courses saveCourseDetails(@RequestBody Courses course) {
        return  coursesrepo.save(course);
    }

    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses course) {
        return   coursesrepo.save(course);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<HttpStatus> deleteCourseById(@PathVariable Integer coursesId){
        coursesrepo.deleteById(coursesId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}