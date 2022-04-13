import React from 'react'
import {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import { Link, useNavigate } from 'react-router-dom';
import OrderService from '../services/OrderService';
import '../OwnerHistoryComponent.css'

export default function RestaurantHistoryComponent(props) {

  const [orderhistory, setOrderhistory] = useState([]);
  const navigate = useNavigate();

  const init = () => {
    OrderService.getAll()
      .then(response => {
        console.log('Printing restaurant order history', response.data);
        setOrderhistory(response.data);
      })
      .catch(error => {
        console.log('vituiksmän', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


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
     <div className="ownerOrderHistoryContainer">
       <h1 className="historyHeader">Here is the order history for {props.orderFromThis}</h1>
     <div>
        {orderhistory.map(history => {
          if(history.rname === props.orderFromThis){
            return <div>
              <Row xs={1} md={3} className="g-4">
                <Card style={{width: '50rem'}}>
                  <Card.Body style={{border: '50px'}}>
                    <Card.Title><b>Ordered by user: {history.username}</b></Card.Title>
                    <Card.Text><b>Order date:</b> {history.order_date}</Card.Text>
                    <Card.Text><b>Ordered items:</b> {history.orderitems}</Card.Text>
                    <Card.Text><b>Total paid:</b> {history.totalsum}€</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          }
        })}
      </div>
    </div>
    </div>    
  )
}
