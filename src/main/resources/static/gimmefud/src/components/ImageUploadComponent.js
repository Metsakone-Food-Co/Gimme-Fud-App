import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import UploadService from "../services/UploadService.js";
import SearchCourses from './SearchCourses';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge, ListGroupItem, Image, CardGroup} from "react-bootstrap";
import {Container , Row, Col} from 'react-bootstrap'  
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

import React from 'react';
import  Axios  from "axios";

const ImageUploadComponent = () => {

    const [imageselected, setImageSelected] = useState();

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageselected);
        formData.append("upload_preset", "v2klxyfb");

        Axios.post("https://api.cloudinary.com/v1_1/gimmefudapp/image/upload", formData).then((response) => {
        console.log(response.data.secure_url)

            
        });
    };



    return(
        <div>

        <input type = "file"
        onChange= {(event) => {
            setImageSelected(event.target.files[0]);
        }}
        />
        <button onClick={uploadImage}>Upload Image</button>
        </div>
    );
  

};

export default ImageUploadComponent;