package com.example.gimmefud.data;


import javax.persistence.*;


@Entity
@Table(name = "courses")

public class Courses {

    @Id
    @Column(name="course_name")
    public String course_name;

    @Column(name="rname")
    public String rname;


    @Column(name = "meal_type")
    public String meal_type;

    @Column(name = "meal_price")
    public String meal_price;

    public Courses(String course_name, String rname, String meal_type, String meal_price) {
        this.course_name = course_name;
        this.rname = rname;
        this.meal_type = meal_type;
        this.meal_price = meal_price;
    }

    public Courses(){}
}