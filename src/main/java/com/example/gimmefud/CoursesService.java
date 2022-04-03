package com.example.gimmefud;

import com.example.gimmefud.data.Courses;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.PostConstruct;
import java.util.List;


@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepo;

    @PostConstruct
    public void init() {


    }

    public Courses GetCourse(String rname) {
        return coursesRepo.findById(rname).orElse(null);
    }

    public List<Courses> GetAllCourses() {
        return coursesRepo.findAll();

    }

    public Courses createCourse(@RequestBody Courses courses) {
        return coursesRepo.save(courses);

    }

    public Courses updateCourse(@RequestBody Courses courses) {
        return coursesRepo.save(courses);

    }

    public ResponseEntity<HttpStatus> deleteCourseById(@PathVariable String course_name) {
        coursesRepo.deleteById(course_name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}

