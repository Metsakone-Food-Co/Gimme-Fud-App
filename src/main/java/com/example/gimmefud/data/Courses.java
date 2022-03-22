package com.example.gimmefud.data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "courses")

public class Courses {

    @Id
    @Column(name="courses_id")
    public Integer courses_Id;


    @Column(name="restaurant_id")
    public Integer restaurant_id;

    @Column(name = "meal_name")
    public String meal_name;

    @Column(name = "meal_type")
    public String meal_type;

    @Column(name = "meal_price")
    public String meal_price;


    public Courses(Integer courses_id, Integer restaurant_id, String meal_name, String meal_type, String meal_price) {
        this.courses_Id = courses_id;
        this.restaurant_id = restaurant_id;
        this.meal_name = meal_name;
        this.meal_type = meal_type;
        this.meal_price = meal_price;
    }

    public Courses(){}
}
