import { useState } from "react";
import LoginService from "../services/LoginService";
import {useNavigate, Link } from 'react-router-dom'

const LoginComponent = (props) => {

  const [username, setUserName] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginCustomer = (e) => {
    e.preventDefault();
    
    const customer = { username, password};
    LoginService.create(customer)
    .then(response => {
        console.log("customer logged successfully", response.data);
        const resivedJWT = response.data.token;
        props.login(resivedJWT);
        navigate("/", {replace: true});
        props.setAsOrderer(username);
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
               value={username}
               onChange={(e) => setUserName(e.target.value)}
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

    <button  onClick={(e) => loginCustomer(e) } type="submit" 
    class = "btn btn-primary">Login</button>

    </div> 
     </form>
     </div>
  
    )
  }

  export default LoginComponent;