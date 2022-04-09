
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import OrderService from "../services/OrderService";



const ShoppingCartComponent = () => {

  const [ordername, setOrdername] = useState('');
  const [rname, setRname] = useState('');
  const [username, setUsername] = useState('');
  const [orderitems, setOrderitems] = useState('');
  const [totalsum, setTotalsum] = useState('');
  
  
  
  
    const submitOrder= (e) => {
        e.preventDefault();
        
        const order= {ordername, rname, username, orderitems, totalsum};
        OrderService.create(order)
        .then(response => {
           console.log("Order placed successfully", response.data);
        
          })
          .catch(error => {
              console.log('something went wrong', error);
          })
      }
  
  
    
  
 
    return (

  
  
    
          <div className="container">
              <h1>Shoppingcart</h1>
              <form class = "row g-3">
  
  
                  <div class="col-md-6">
                  <label for = "inputOwnerId" class="form-label">ordername</label>
                      <input 
                          type="text" 
                          className="form-control"
                          id="ordername"
                          value={ordername}
                          onChange={(e) => setOrdername(e.target.value)}
                       
                      />
  
                  </div>
                  <div class="col-md-6">
                  <label for = "inputRestaurantName" class="form-label">Restaurant name</label>
                      <input 
                          type="text" 
                          className="form-control "
                        
                          value={rname}
                          onChange={(e) => setRname(e.target.value)}
                          
                      />
                  </div>
                  <div class="col-md-12">
                  <label for = "inputAddress" class="form-label">Username</label>
                      <input 
                          type="text" 
                          className="form-control "
                     
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          
                      />
                  </div>
                  <div class = "col-md-6">
                   <label for = "inputServiceHours" class="form-label">order items</label>
                      <input 
                          type="text" 
                          className="form-control "
                          
                          value={orderitems}
                          onChange={(e) => setOrderitems(e.target.value)}
                         
                      />
                  </div>
                  <div class = "col-md-6">
                    <label for = "inputRestaurantType" class="form-label">total sum</label>
                      <input 
                          type="text" 
                          className="form-control "
                        
                          value={totalsum}
                          onChange={(e) => setTotalsum(e.target.value)}
                         
                      />
                  </div>
                  
                  <div >
                     <button onClick={(e) => submitOrder(e)} className="btn btn-primary">place order</button>
                  </div>
              </form>
            
               </div>
               
      )
  }
  
  export default ShoppingCartComponent;