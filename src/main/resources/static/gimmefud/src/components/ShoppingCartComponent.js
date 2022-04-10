import React from 'react'
import {useState} from 'react'


export default function ShoppingCartComponent(props) {


  console.log("JEE: ", props.order)
  return (
    <div>
        <h3>Yo {props.orderer} bruh, your order:</h3>

        <div>
            {props.order.map(orderItem => {
                return <div>
                    <h3>Restaurant: {orderItem.rname}</h3>
                    <h4>{orderItem.course_name} {orderItem.amount}pcs {orderItem.meal_price}€/meal</h4>
                    
                    </div>
            })}
            
            

        </div>
        <div>Total is: {props.total}</div>

    </div>
  )
}
