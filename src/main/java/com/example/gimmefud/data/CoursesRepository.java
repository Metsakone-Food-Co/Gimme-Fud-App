package com.example.gimmefud.data;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.lang.model.element.Name;
import java.util.List;

public interface CoursesRepository extends JpaRepository<Courses, String> {
    Name findByRname(String rname);

}