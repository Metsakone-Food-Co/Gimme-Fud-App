import { useState } from "react";
import LoginOwnerService from "../services/LoginOwnerService";
import {useNavigate, Link } from 'react-router-dom'

const LoginOwnerComponent = (props) => {

  const [usernamer, setUserNamer] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginOwner = (e) => {
    e.preventDefault();
    
    const restaurantowner = { usernamer, password};
    LoginOwnerService.create(restaurantowner)
    .then(response => {
        console.log("customer logged successfully", response.data);
        const ownerJWT = response.data.token;
        props.loginOwner(ownerJWT);
        navigate("/ListRestaurantComponent", {replace: true});

    })
    .catch(error => {
        console.log('something went wrong', error);
    })

}

    return (
  

      

  
      <div className="container">
          <h1>Login</h1>
          <form action="/" method="post">
            <div class = " form-floating mb-3">
              <input type="text"
               class="form-control" 
               id= "loginUsername "
               value={usernamer}
               onChange={(e) => setUserNamer(e.target.value)}
                placeholder="Username" >
              </input> 
              <label for = "loginUsername" >Username</label>
            </div>

            <div class = " form-floating mb-3">
              <input type="Password" 
              class="form-control" 
              id= "loginPAssword " 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" >
              </input> 
              <label for = "loginPassword" >Password</label>
            </div>
            <div class="col-12">

    <button  onClick={(e) => loginOwner(e) } type="submit" 
    class = "btn btn-primary">Login</button>

    </div> 
     </form>
     </div>

  
    )
  }

  export default LoginOwnerComponent;