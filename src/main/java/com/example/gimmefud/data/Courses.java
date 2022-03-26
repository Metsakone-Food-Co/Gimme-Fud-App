package com.example.gimmefud.data;


import javax.persistence.*;


@Entity
@Table(name = "courses")

public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="courses_id")
    public Integer coursesId;


    @Column(name="restaurant_id")
    public Integer restaurantid;

    @Column(name = "meal_name")
    public String mealname;

    @Column(name = "meal_type")
    public String mealtype;

    @Column(name = "meal_price")
    public String mealprice;


    public Courses(Integer courses_id, Integer restaurant_id, String meal_name, String meal_type, String meal_price) {
        this.coursesId = courses_id;
        this.restaurantid = restaurant_id;
        this.mealname = meal_name;
        this.mealtype = meal_type;
        this.mealprice = meal_price;
    }

    public Courses(){}
}