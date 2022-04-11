import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import OrderService from "../services/OrderService";
import '../ShoppingCartPage.css'
import { Card, Button, Image} from 'react-bootstrap';

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

  const navigate = useNavigate();
//TESTING
/*const rnameFinder = (ravintelinNimi) => {
    let ravinteli = ravintelinNimi;
    console.log("RAVINTELI ON: ", ravinteli)
}*/

  //(console.log("JEE: ", props.order[0].rname)
  return (
    <div>
    <div className='navbar'>
      <div className='leftSide'> 
        <img className='kuva'src="Logo.png"/>    
         </div>
       <div className='rightSide'>
      <button type = "button" class="btn background-color:transparent btn-lg " onClick={() => navigate (-1)}> Go back</button>
    
         </div>  
     </div>

    <div className='container'>

    <h2>Thankyou {props.orderer}, </h2>
           <h3>here is your order:</h3>
           <br></br><hr></hr>
    <Card style={{width: '18rem'}}>
         <Card.Body style={{border: '50px', padding:'25px'}}>
           
           <Card.Text>{props.order.map(orderItem => {
                return <div>
                    <h4>Restaurant: </h4>
                    <p>{orderItem.rname}</p> <hr></hr>
                    <h4>Order:</h4>
                    <p>{orderItem.course_name} {orderItem.amount}pcs {orderItem.meal_price}€/meal</p>
                    </div>
           })}</Card.Text> <hr></hr>
           <Card.Text><h4>Total is: </h4>
           <p>{props.total} €</p></Card.Text>
          
         </Card.Body>
       </Card>

       <Button onClick={() => {submitOrder( ravinteli, kayttaja, annokset, totaali)}}>Vahvista tilaus</Button>

    </div>
    </div> 
  )
}
