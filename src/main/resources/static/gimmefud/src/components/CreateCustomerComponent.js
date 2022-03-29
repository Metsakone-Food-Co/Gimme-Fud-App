import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CustomerService from "../services/CustomerService";




const CreateCustomerComponent = () => {
    const [username, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[address, setAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[role, setRole] = useState('');
   




    const saveCustomer = (e) => {
        e.preventDefault();
        
        const customer = { username, password, firstName, lastName,address, phoneNumber, role };
        CustomerService.create(customer,setRole("CUSTOMER"))
        .then(response => {
            console.log("customer added successfully", response.data);
            
      
            
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }




  return (
    <div className="container"> 
        <h1> Create account  </h1>
    <div className="createCustomer">
    <form  class = "row g-3">
        


<div class = "col-md-6">
    <label for = "inputUserName" class="form-label">Username</label>
    <input
    type="text"
    class="form-control"
    id="username"
    value={username}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Username"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputPassword" class="form-label">Password</label>
    <input
    type="Password"
    class="form-control"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputFirstName" class="form-label">First name</label>
    <input
    type="text"
    class="form-control"
    id="firstName"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    placeholder="First name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "LastName" class="form-label">Last name</label>
    <input
    type="text"
    class="form-control"
    id="inputlastName"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    placeholder="Last name"
    name="s" 
    />
</div>
<div class = "col-md-6">
    <label for = "Phonenumber" class="form-label">Phone number</label>
    <input
    type="text"
    class="form-control"
    id="phonenumber"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    placeholder="Phone number"
    name="s" 
    />
</div>

<div class = "col-12">
    <label for = "inputAddress" class="form-label">Address</label>
    <input
    type="text"
    class="form-control"
    id="inputAddress"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    placeholder="SomeAddress 69"
    name="s" 
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
<div class="col-12">
<button  onClick={(e) => saveCustomer(e)} type="submit" class = "btn btn-primary">Add me</button>

    </div>   
    </form>
                
                
                 </div>
        </div>
  )
}

export default CreateCustomerComponent;