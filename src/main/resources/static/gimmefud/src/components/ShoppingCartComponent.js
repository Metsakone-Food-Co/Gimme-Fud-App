import React from 'react'
import {useState} from 'react'
import OrderService from "../services/OrderService";

export default function ShoppingCartComponent(props) {

//testing
//const [ordername, setOrdername] = useState('');
/*const [rname, setRname] = useState('');
const [username, setUsername] = useState('');
const [orderitems, setOrderitems] = useState('');
const [totalsum, setTotalsum] = useState('');*/


//testing
//TESTING

const ravinteli = props.order[0].rname;
const annokset = (props.order[0].course_name + ' ' + props.order[0].amount)
const tilauksennimi = '4';
const kayttaja = props.orderer
const totaali = props.total

console.log(tilauksennimi, ravinteli, annokset, kayttaja, totaali)

const submitOrder= (rname, username, orderitems, totalsum) => {
    //e.preventDefault();
    
    const order= {rname, username, orderitems, totalsum};
    OrderService.create(order)
    .then(response => {
       console.log("Order placed successfully", response.data);
    
      })
      .catch(error => {
          console.log('something went wrong', error);
      })
  }

//TESTING
/*const rnameFinder = (ravintelinNimi) => {
    let ravinteli = ravintelinNimi;
    console.log("RAVINTELI ON: ", ravinteli)
}*/

  //(console.log("JEE: ", props.order[0].rname)
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
        <button onClick={() => {submitOrder( ravinteli, kayttaja, annokset, totaali)}}>Vahvista tilaus</button>

    </div>
  )
}
