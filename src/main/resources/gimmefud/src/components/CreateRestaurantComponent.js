import { useState } from 'react'
import { Link, useParams, useNavigate} from "react-router-dom";
import RestaurantService from '../services/RestaurantService'
import  Axios  from "axios";

const CreateRestaurant = () => {
    const[usernamer, setUsernamer] = useState('');
    const[rname, setRname] = useState('');
    const[raddress, setRaddress] = useState('');
    const[service_hours, setServiceHours] = useState('');
    const[rtype, setRtype] = useState('');
    const[price_range, setPriceRange] = useState('');
    const[img_url, setImageUrl] = useState('');
    const navigate = useNavigate();
  



    const saveRestaurant = (r) => {
        r.preventDefault();
        
        const restaurant = {usernamer, rname, raddress, service_hours, rtype, price_range, img_url};
        RestaurantService.create(restaurant)
        .then(response => {
            console.log("restaurant added successfully", response.data);

        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }

    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "v2klxyfb");
  
        Axios.post("https://api.cloudinary.com/v1_1/gimmefudapp/image/upload", formData).then((response) => {
        console.log(response.data.secure_url)
        setImageUrl(response.data.secure_url)
  
            
        });
    };
    return(

        <div>
    <div className='navbar'>
      <div className='leftSide'> 
        <img className='kuva'src="Logo.png"/>    
         </div>
       <div className='rightSide'>
      <button type = "button" class="btn background-color:transparent btn-lg " onClick={() => navigate (-1)}> Go back</button>
         </div>
         </div>

        <div className="container">
            <h1>Create Restaurant</h1>
            <form class = "row g-3">


                <div class="col-md-6">
                <label for = "inputOwnerId" class="form-label">Owner username</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="oID"
                        value={usernamer}
                        onChange={(r) => setUsernamer(r.target.value)}
                        placeholder="Enter username"
                    />

                </div>
                <div class="col-md-6">
                <label for = "inputRestaurantName" class="form-label">Restaurant name</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="rname"
                        value={rname}
                        onChange={(r) => setRname(r.target.value)}
                        placeholder="Enter Restaurant name"
                    />
                </div>
                <div class="col-md-12">
                <label for = "inputAddress" class="form-label">Restaurant address</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="raddress"
                        value={raddress}
                        onChange={(r) => setRaddress(r.target.value)}
                        placeholder="Enter Restaurant address"
                    />
                </div>
                <div class = "col-md-6">
                 <label for = "inputServiceHours" class="form-label">Service hours</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="shours"
                        value={service_hours}
                        onChange={(r) => setServiceHours(r.target.value)}
                        placeholder="Enter Service hours"
                    />
                </div>
                <div class = "col-md-6">
                  <label for = "inputRestaurantType" class="form-label">Restaurant type</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="rtype"
                        value={rtype}
                        onChange={(r) => setRtype(r.target.value)}
                        placeholder="Enter Restaurant type"
                    />
                </div>
                <div class = "col-md-6">
                    <label for = "inputPriceRange" class="form-label">Price range</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="price"
                        value={price_range}
                        onChange={(r) => setPriceRange(r.target.value)}
                        placeholder="Enter price range"
                    />
                </div>

                <div class = "col-md-6">
            <div>

            <input type = "file"
            onChange= {(event) => {
                uploadImage(event.target.files);
            }}
            />
            </div>
                </div>


                <div >
                   <button onClick={(r) => saveRestaurant(r)} className="btn btn-primary">Save</button>
                </div>
            </form>
          
             </div>
             </div>
       
    )
}

export default CreateRestaurant;
