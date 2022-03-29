import { useState } from 'react'
import { Link, useParams} from "react-router-dom";
import OwnerService from '../services/OwnerService'

const CreateOwner = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[address, setAddress] = useState('');
    const[phone_number, setPhone_number] = useState('');
    const[role, setRole] = useState('');

 

    const saveOwner = (o) => {
        o.preventDefault();
        
        const owner = {username, password, fname, lname, address, phone_number, role};
        OwnerService.create(owner, setRole("OWNER"))
        .then(response => {
            console.log("restaurant owner added successfully", response.data);
           
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }
    return(
        <div className="container">
            <h1>Create Restaurant Owner</h1>

            <form class = "row g-3">

            <div class = "col-md-6">
            <label for = "inputUserName" class="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="uname"
                        value={username}
                        onChange={(o) => setUsername(o.target.value)}
                        placeholder="Enter username"
                    />

                </div>
                <div class = "col-md-6">
                 <label for = "inputPassword" class="form-label">Password</label>
                    <input 
                        type="Password" 
                        className="form-control"
                        id="pword"
                        value={password}
                        onChange={(o) => setPassword(o.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <div class = "col-md-6">
                    <label for = "inputFirstName" class="form-label">First name</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="fname"
                        value={fname}
                        onChange={(o) => setFname(o.target.value)}
                        placeholder="Enter first name"
                    />
                </div>
                <div class = "col-md-6">
                <label for = "inputLastName" class="form-label">Last name</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="lname"
                        value={lname}
                        onChange={(o) => setLname(o.target.value)}
                        placeholder="Enter last name"
                    />
                </div>
                <div class = "col-md-12">
                <label for = "inputAddress" class="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="address"
                        value={address}
                        onChange={(o) => setAddress(o.target.value)}
                        placeholder="Enter address"
                    />
                </div>
                <div class = "col-md-6">
                <label for = "inputPhoneNumber" class="form-label">Phone number</label>
                    <input 
                        type="text" 
                        className="form-control "
                        id="pnumber"
                        value={phone_number}
                        onChange={(o) => setPhone_number(o.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>
                
         <div class="col-12">
            <div class="form-check">
      <input class="form-check-input"
       type="checkbox" id="gridCheck" />
      <label class="form-check-label"
       for="gridCheck">
        My information is correct
      </label>
    </div>
    </div>
                <div >
                    <button onClick={(o) => saveOwner(o)} className="btn btn-primary">Save</button>
                </div>
            </form>
      
            
        </div>
    )
}

export default CreateOwner;