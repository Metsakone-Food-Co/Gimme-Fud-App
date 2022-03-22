package com.example.gimmefud.controllers;

import com.example.gimmefud.CoursesService;
import com.example.gimmefud.data.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/courses")
public class CoursesController {

    @Autowired
    CoursesService coursesService;

    @GetMapping
    public List<Courses> getAllCourses(){
        return coursesService.getcourses() ;
    }


}