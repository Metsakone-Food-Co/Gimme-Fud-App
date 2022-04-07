import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CoursesService from "../services/CoursesService";
import UploadService from "../services/UploadService";
import { useEffect, useState } from 'react';
import CoursesService from '../services/CoursesService';
import { Link, Outlet } from 'react-router-dom';
import SearchCourses from './SearchCourses';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge, ListGroupItem, Image, CardGroup} from "react-bootstrap";
import {Container , Row, Col} from 'react-bootstrap'  
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

import React from 'react';
import { Axios } from "axios";

const ImageUploadComponent = () => {

    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "ml_default");

        Axios.post("localhost:8080/api/v1/upload", formData).then((response) => {
            console.log(response);
        });
    };<



    return(
        <div>

        <input type = "file"
        onChange= {(event) => {
            uploadImage(event.target.files);
        }}
        />
        </div>
    );
  

};

export default ImageUploadComponent;






