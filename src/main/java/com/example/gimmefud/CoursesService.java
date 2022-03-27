package com.example.gimmefud;

import com.example.gimmefud.data.Courses;
import com.example.gimmefud.data.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepo;

    public Courses GetCourse(String courseName){
        return coursesRepo.findById(courseName).orElse(null);
    }

    public List<Courses> GetAllCourses(){
        return coursesRepo.findAll();

    }

}
