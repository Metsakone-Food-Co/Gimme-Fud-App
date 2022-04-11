import React from 'react'
import {useState, useEffect} from 'react'
import OrderService from '../services/OrderService';

export default function HistoryComponent(props) {

  const [orderhistory, setOrderhistory] = useState([]);


  const init = () => {
    OrderService.getAll()
      .then(response => {
        console.log('Printing order history', response.data);
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
    <div>{orderhistory.map(history => {
      if(history.username === props.orderer){
      return <div>
        <h4>Order date: {history.order_date}</h4>
        <p>Ordered meals: {history.orderitems} pcs</p>
        <p>Total sum: {history.totalsum} €</p>
        <p>Orderer: {history.username}</p>
      </div>}
    })}




    </div>
  )
}
