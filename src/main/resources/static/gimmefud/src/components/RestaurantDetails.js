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
   
      

        if(!cart.some(i => i.course_name === item.course_name)){
          item.amount = 1;
          setCart(cart.concat(item));
        }
        else{
          const newCart = cart.map(i => {
            if(i.course_name === item.course_name){
              i.amount++;
            }
            return i;
          });
          setCart(newCart); 
        }
      }
        
      const onRemoveFromCart = (item) => {
        const remove = cart.map(i => {
          if(i.course_name === item.course_name){
           i.amount--;
          }
          return i;
        });
        setCart(remove);
      }
        
   
      
      
   
  
      

      function summa(cart){
        let sum = 0;
        for(let i = 0; i < cart.length; i++){
          sum += cart[i].amount * cart[i].meal_price;
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
             return <p>{meals.course_name} {meals.meal_price}€ x{meals.amount} <br></br>
             <Button onClick={() => onRemoveFromCart(meals)}>Remove</Button> </p>
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




