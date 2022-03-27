import { useEffect, useState } from 'react';
import React from 'react';
import CustomerService from '../services/CustomerService';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

const CustomerCardTest = () => {

  const [customers, setCustomers] = useState([]);

  const init = () => {
    CustomerService.getAll()
      .then(response => {
        console.log('Printing customer data', response.data);
        setCustomers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


 
  

  return (
    <div className="container">
      <h3>List of Customers</h3>
      
        <Card style={{ width: '18rem' }}>
          <Card.Body>
        {customers.map(customer =>(
          <tr key={customer.firstname}>
            <div class="card" widht="50px">
            <Card.Img variant="top" src="https://fi.wikipedia.org/wiki/Nakkis%C3%A4mpyl%C3%A4#/media/Tiedosto:Hot_dog_with_mustard.png" />
            <Card.Title>{customer.firstName}</Card.Title>
              <div class="card-body">
                <div class="card-title">{customer.lastName}</div>
              </div>
            </div>
          </tr>
          
        ))
        
        }
        </Card.Body>
        </Card>
        
          
      
    </div>
  );
}

export default CustomerCardTest;