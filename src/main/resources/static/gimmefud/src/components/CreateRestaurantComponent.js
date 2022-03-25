import { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import RestaurantService from '../services/RestaurantService'

const CreateRestaurant = () => {
    const[owner_id, setOwner_id] = useState('');
    const[rname, setRname] = useState('');
    const[raddress, setRaddress] = useState('');
    const[service_hours, setServiceHours] = useState('');
    const[rtype, setRtype] = useState('');
    const[price_range, setPriceRange] = useState('');

    const {restaurant_id} = useParams();

    const saveRestaurant = (r) => {
        r.preventDefault();
        
        const restaurant = {owner_id, rname, raddress, service_hours, rtype, price_range};
        RestaurantService.create(restaurant)
        .then(response => {
            console.log("restaurant added successfully", response.data);

        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }
    return(
        <div className="container">
            <h1>Create Restaurant</h1>
            <form class = "row g-3">


                <div class="col-md-6">
                <label for = "inputOwnerId" class="form-label">Owner ID</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="oID"
                        value={owner_id}
                        onChange={(r) => setOwner_id(r.target.value)}
                        placeholder="Enter owner ID"
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
                <div >
                    <button onClick={(r) => saveRestaurant(r)} className="btn btn-primary">Save</button>
                </div>
            </form>
          
            
        </div>
    )
}

export default CreateRestaurant;






/*import React from 'react'
import RestaurantService from '../services/RestaurantService'

export default function CreateRestaurantComponent(props) {
    const newRestaurant = props
    RestaurantService.createRestaurant(newRestaurant)

  return (

    <div className="createRestaurant">
        <h1>Create your restaurant here</h1>
        <form action="/" method="post">
        <label htmlFor="restaurantID">
            <span className="visually-hidden">Restaurant Id</span>
        </label>
        <input
            type="text"
            id="restaurant_id"    
            placeholder="Restaurant Id"
            name="a"
        />
        <input
            type="text"
            id="owner_id"
            placeholder="Owner Id"
            name="b"
        />    
        <input
            type="text"
            id="rname"
            placeholder="Restaurant name"
            name="c"
        /> 
        <input
            type="text"
            id="raddress"
            placeholder="Restaurant address"
            name="d"
        />
        <input
            type="text"
            id="service_hours"
            placeholder="Service hours"
            name="e"
        /> 
        <input
            type="text"
            id="rtype"
            placeholder="Restaurant type"
            name="f"
        />
        <input
            type="text"
            id="price_range"
            placeholder="Price range"
            name="g"
        />                                   
        </form>

        
    </div>
  )
}*/