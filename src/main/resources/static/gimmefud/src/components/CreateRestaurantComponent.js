import { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import RestaurantService from '../services/RestaurantService'

const CreateRestaurant = () => {
    const[restaurant_id, setRestaurant_id] = useState('');
    const[owner_id, setOwner_id] = useState('');
    const[rname, setRname] = useState('');
    const[raddress, setRaddress] = useState('');
    const[service_hours, setServiceHours] = useState('');
    const[rtype, setRtype] = useState('');
    const[price_range, setPriceRange] = useState('');
    //const history = useHistory();

    const saveRestaurant = (r) => {
        r.preventDefault();
        
        const restaurant = {restaurant_id, owner_id, rname, raddress, service_hours, rtype, price_range};
        RestaurantService.create(restaurant)
        .then(response => {
            console.log("restaurant added successfully", response.data);
            //history.push("/");
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }
    return(
        <div className="container">
            <h3>Create Restaurant</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="rID"
                        value={restaurant_id}
                        onChange={(r) => setRestaurant_id(r.target.value)}
                        placeholder="Enter restaurant ID"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="oID"
                        value={owner_id}
                        onChange={(r) => setOwner_id(r.target.value)}
                        placeholder="Enter owner ID"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="rname"
                        value={rname}
                        onChange={(r) => setRname(r.target.value)}
                        placeholder="Enter Restaurant name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="raddress"
                        value={raddress}
                        onChange={(r) => setRaddress(r.target.value)}
                        placeholder="Enter Restaurant address"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shours"
                        value={service_hours}
                        onChange={(r) => setServiceHours(r.target.value)}
                        placeholder="Enter Service hours"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="rtype"
                        value={rtype}
                        onChange={(r) => setRtype(r.target.value)}
                        placeholder="Enter Restaurant type"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
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
            <hr/>
            
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