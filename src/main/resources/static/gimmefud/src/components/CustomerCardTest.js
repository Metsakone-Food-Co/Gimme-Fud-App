import { useEffect, useState } from 'react';
import React from 'react';
import CustomerService from '../services/CustomerService';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

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
        
      <Row xs={1} md={3} className="g-4">
        {customers.map(customer =>(
          <tr key={customer.firstname}>
              
              <Card style={{ width: '18rem' }}>
              <Card.Body>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71GBQJBNEKL._SX679_.jpg"/>
            <Card.Title>{customer.firstName}</Card.Title>
            
            
            <Card.Text>
                
                {customer.lastName}
            
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>

            </Card.Body>
            </Card>
            
          </tr>
        ))
        }
        </Row>
        
         
        
        
        
          
      
    </div>
  );
}

export default CustomerCardTest;