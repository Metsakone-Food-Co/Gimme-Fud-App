package com.example.gimmefud.controllers;

import com.example.gimmefud.CoursesService;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CoursesController {

    @Autowired
    CoursesService coursesService;



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


    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses courses) {
        return   coursesService.updateCourse(courses);
    }

    @DeleteMapping("/courses/{course_name}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String course_name){
      return coursesService.deleteCourseById(course_name);
    }


}