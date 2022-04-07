import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import CoursesService from '../services/CoursesService';

 import { useParams,Outlet,Link} from 'react-router-dom'
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import '../RestaurantPage.css'





 export default function RestaurantDetails() {

    const [restaurant, setRestaurant] = useState([]);
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([
     /* {quantity: 1,course_name: 'hampurilainen', meal_price: '5.00'},

    {quantity: 1, course_name: 'Milk', meal_price: '2.00'}*/]);
    const [qty, setQty] = useState(0);
     
    const result = useParams();
    console.log(result);


    const init = () => {
      RestaurantService.get(result.rname)
        .then(response => {
          console.log('Printing restaurants', response.data);
          setRestaurant(response.data);
        })
        .catch(error => {
          console.log('vituiksmän', error);
        }) 
    }
    useEffect(() => {
      init();
    }, []);

    
    
      const cinit = () => {
        CoursesService.getAll()
          .then(response => {
            console.log('Printing courses data', response.data);
            setCourses(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        cinit();
      }, []);

      const onAddToCart = (item) => {
   
      
           let newCart = [cart.concat(item)];
      
          let itemClickedIdex = newCart.findIndex(i => item === i.course_name);
     

          if(itemClickedIdex != -1) {
           

            let newElement = {...newCart[itemClickedIdex]}
            newElement.quantity = newElement.quantity + 1;
            newCart[itemClickedIdex] =newElement;
          
            setCart(newCart);
          
          }
          console.log("CART: " , cart[1]);
        }
        
   
       
/*
        const newCart = cart.concat(item);
        
          if (item.quantity== null) {
          setCart(newCart, item.quantity = + 1);
          }
        }
         */
/*
          let newCart = [...cart]
          newCart.push({item})
          cart.map(i => {
            if (i.course_name === item.course_name) {
              i.quantity = i.quantity + 1;
              setCart(newCart);
          }
          })
          
     
        
      }
      
   */
      

      function summa(cart){
        let sum = 0;
        let i = cart.length;
        while(i--){
          sum += parseInt(cart[i].meal_price) || 0;
        }
        return sum;
      }



   return (
  <div className="restaurantPage">
    <h1>{restaurant.rname}</h1>
    <div className="restaurantContainer">
      <div className="leftMenu">
      <Row xs={1} md={3} className="g-4">
       <Card style={{width: '18rem'}}>
         <Card.Body style={{border: '50px'}}>
           <Card.Title>CART</Card.Title>
           <Card.Text>Meals: {cart.map(meals => {
             return <p>{meals.quantity}x {meals.course_name} {meals.meal_price}€</p>
           })}</Card.Text>
           <Card.Text>Total: {summa(cart)} €</Card.Text>
         </Card.Body>
       </Card>
     </Row>
      </div>
      <div className="centerMenu">
      <h1>Main courses</h1>
      {courses.map(course => {
        if(course.rname == restaurant.rname)
          if(course.meal_type == "Main course")
        return(
        <Row xs={1} md={3} className="g-4">
          
       
          <Card style={{width: '18rem'}}>
            <Card.Body style={{border: '50px'}}>
              <Card.Title>{course.course_name}</Card.Title>
              <Card.Text>Tähän annoksen kuva</Card.Text>
              <Card.Text>
                <p>Price: {course.meal_price}€</p>
              </Card.Text>
              <Button onClick={() => onAddToCart(course)}>Add to cart<BsCartPlus/></Button>
            </Card.Body>
          </Card>
        </Row>
      )})}
      <h1>Sides</h1>
      {courses.map(course => {
        if(course.rname == restaurant.rname)
          if(course.meal_type == "Side")
        return(
        <Row xs={1} md={3} className="g-4">
          <Card style={{width: '18rem'}}>
            <Card.Body style={{border: '50px'}}>
              <Card.Title>{course.course_name}</Card.Title>
              <Card.Text>Tähän annoksen kuva</Card.Text>
              <Card.Text>
                <p>Price: {course.meal_price}€</p>
              </Card.Text>
              <Button onClick={() => onAddToCart(course)}>Add to cart<BsCartPlus/></Button>
            </Card.Body>
          </Card>
        </Row>
      )})}
      <h1>Desserts</h1>
      {courses.map(course => {
        if(course.rname == restaurant.rname)
          if(course.meal_type == "Dessert")
        return(
        <Row xs={1} md={3} className="g-4">
          <Card style={{width: '18rem'}}>
            <Card.Body style={{border: '50px'}}>
              <Card.Title>{course.course_name}</Card.Title>
              <Card.Text>Tähän annoksen kuva</Card.Text>
              <Card.Text>
                <p>Price: {course.meal_price}€</p>
              </Card.Text>
              <Button onClick={() => onAddToCart(course)}>Add to cart<BsCartPlus/></Button>
            </Card.Body>
          </Card>
        </Row>
      )})}
      <h1>Drinks</h1>
      {courses.map(course => {
        if(course.rname == restaurant.rname)
          if(course.meal_type == "Drink")
        return(
        <Row xs={1} md={3} className="g-4">
          <Card style={{width: '18rem'}}>
            <Card.Body style={{border: '50px'}}>
              <Card.Title>{course.course_name}</Card.Title>
              <Card.Text>Tähän annoksen kuva</Card.Text>
              <Card.Text>
                <p>Price: {course.meal_price}€</p>
              </Card.Text>
              <Button onClick={() => onAddToCart(course)}>Add to cart<BsCartPlus/></Button>
            </Card.Body>
          </Card>
        </Row>
      )})}


     
    </div>
    <div className="rightMenu">
     <Row xs={1} md={3} className="g-4">
       <Card style={{width: '18rem'}}>
         <Card.Body style={{border: '50px'}}>
           <Card.Title>Restaurant information</Card.Title>
           <Card.Text>{restaurant.rname}</Card.Text>
           <Card.Text>Address: {restaurant.raddress}</Card.Text>
           <Card.Text>Type: {restaurant.rtype}</Card.Text>
           <Card.Text>Service hours: {restaurant.service_hours}</Card.Text>
           <Card.Text>Price range: {restaurant.price_range}</Card.Text>
         </Card.Body>
       </Card>
     </Row>
    </div>
     </div>
     </div>

    
   ) 
 }




