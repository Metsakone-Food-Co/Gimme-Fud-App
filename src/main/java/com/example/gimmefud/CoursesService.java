package com.example.gimmefud;

import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class CoursesService {
    @Autowired
    CoursesRepository coursesRepository;

    @PostConstruct
    public List<Courses> getcourses(){
        return coursesRepository.findAll();
    }

}
