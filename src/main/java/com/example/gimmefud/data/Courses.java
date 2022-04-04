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

    @Column(name = "img_url")
    public String img_url;

    public Courses(String course_name, String rname, String meal_type, String meal_price,  String img_url) {
        this.course_name = course_name;
        this.rname = rname;
        this.meal_type = meal_type;
        this.meal_price = meal_price;
        this.img_url = img_url;
    }

    public Courses(){}
}