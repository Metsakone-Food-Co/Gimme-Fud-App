package com.example.gimmefud.data;


import javax.persistence.*;


@Entity
@Table(name = "courses")

public class Courses {

    @Id
    @Column(name="course_name")
    public String coursename;

    @Column(name="rname")
    public String rname;

    @Column(name = "meal_name")
    public String mealname;

    @Column(name = "meal_type")
    public String mealtype;

    @Column(name = "meal_price")
    public String mealprice;

    public Courses(String coursename, String rname, String mealname, String mealtype, String mealprice) {
        this.coursename = coursename;
        this.rname = rname;
        this.mealname = mealname;
        this.mealtype = mealtype;
        this.mealprice = mealprice;
    }

    public Courses(){}
}