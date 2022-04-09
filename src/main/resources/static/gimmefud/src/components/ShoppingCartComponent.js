import React from 'react'
//TESTI
import CustomerService from '../services/CustomerService';
import { useEffect, useState } from 'react';
//TESTI
export default function ShoppingCartComponent(props) {

//TESTI
const [orderingCustomer, setOrderingCustomer] = useState([]);

  const init = () => {
    CustomerService.getAll()
      .then(response => {
        console.log('Printing customer data', response.data);
        setOrderingCustomer(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);
//TESTI:
  return (
    <div>
        <h3>Hello, dude who's hashed password is {props.uuser}</h3>
        <div>Customer is: {orderingCustomer.map(orderer => {
            if(orderer.password === props.uuser){
                return orderer.fname;
            } else {
                console.log("Tyhmä", props.uuser)
            }
        })
        } </div>
        <ul>
            {props.order.map(orderItem => {
                return <li>{orderItem.course_name} {orderItem.amount}pcs {orderItem.meal_price}€/meal</li>
            })}
            
            

        </ul>

    </div>
  )
}
