
import './App.css';
import ListCoursesComponent from './components/ListCoursesComponent'
import CreateCoursesComponent from './components/CreateCoursesComponent'
import HomepageComponent from './components/HomepageComponent'
import ListCustomerComponent from './components/ListCustomerComponent'
import ListOwnerComponent from './components/ListOwnerComponent'
import ListRestaurantComponent from './components/ListRestaurantComponent'
import CreateCustomerComponent from './components/CreateCustomerComponent'
import CreateOwnerComponent from './components/CreateOwnerComponent'
import CreateRestaurantComponent from './components/CreateRestaurantComponent'
import LoginComponent from './components/LoginComponent'
import CreationSuccesfull from './Messages/CreationSuccesfull';
import SearchRestaurant from './components/SearchRestaurant';
import SearchCourses from './components/SearchCourses'
import LoginOwnerComponent from './components/LoginOwnerComponent'
import RestaurantDetails from './components/RestaurantDetails'
import CoursesDetails from './components/CoursesDetails'
import ShoppingCartComponent from './components/ShoppingCartComponent';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomepageOwnerComponent from './components/HomepageOwnerComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';






function App() {

  const [orderList, setOrderList] = useState([]);
  const placeOrderClicked = (orderStuff) => {
    console.log("TILAUS ON: ", orderStuff);
    setOrderList(orderStuff);
    console.log("ORDER LIST: ", orderList);
  }


  const [userJwt, setUserJwt] = useState(null);

   const [ownerJwt, setOwnerJwt] = useState(null);
  
 

  let authRoutes = <>
  <Route path="LoginComponent" element={<LoginComponent login={ (newJWT) => setUserJwt(newJWT) }/> }/>
   <Route path="LoginOwnerComponent" element={<LoginOwnerComponent login={ (newJWT) => setOwnerJwt(newJWT) }/> }/>
   <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
   <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
  
  </>

  if (userJwt != null) {
    authRoutes = <>

      <Route path="ListCoursesComponent" element={<ListCoursesComponent/>}/>
      <Route path="ListCoursesComponent/:rname" element = { <CoursesDetails />}>
        </Route>

      <Route path="CreateCoursesComponent" element={<CreateCoursesComponent/>}/>
      <Route path="ListCustomerComponent" element={<ListCustomerComponent/>}/>
      <Route path="ListOwnerComponent" element={<ListOwnerComponent/>}/>


      <Route path="ListRestaurantComponent" element={<ListRestaurantComponent />}/>
        <Route path="ListRestaurantComponent/:rname" element = { <RestaurantDetails placeOrder={placeOrderClicked} />}/>
          <Route path="ShoppingCartComponent" element = {<ShoppingCartComponent order={orderList} uuser={userJwt}/>}> 
        </Route>
        
      <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
      <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
      <Route path="CreateRestaurantComponent" element={<CreateRestaurantComponent/>}/>
      <Route path="CreationSuccesfull" element={<CreationSuccesfull/>}/>
      <Route path="SearchRestaurant" element={<SearchRestaurant/>}/>
      <Route path="SearchCourses" element={<SearchCourses/>}/>
     <Route path="ShoppingCartComponent" element={<ShoppingCartComponent order={orderList} />}/>

  
       

  
    </>
  }
     
  let authLinks = <>
   <Link to="/CreateCustomerComponent"><div>Create customer</div></Link>
        <Link to="/CreateOwnerComponent"><div>Create owner</div></Link>
        <Link to="/CreateCoursesComponent"><div>Create Courses</div></Link>
        <Link to="/LoginComponent"><div>Login</div></Link>
        <Link to="/LoginOwnerComponent"><div>Login as a Owner</div></Link>

  </>
  if (userJwt != null) {
    authLinks = <>
       <Link to="/ListRestaurantComponent"><div>Restaurant list</div></Link>
        <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
        <Link to="/ListOwnerComponent"><div>Restaurant owners</div></Link> 
        <Link to="/CreateCoursesComponent"><div>Create Courses</div></Link>
        <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
        <Link to="/ShoppingCartComponent"><div>Shopping Cart</div></Link>
        <div><button type ="button" onClick={()=>setUserJwt(null)} >LOG OUT</button></div>
    </>
  }





  let ownerRoutes = <>
   <Route path="LoginComponent" element={<LoginComponent login={ (newJWT) => setUserJwt(newJWT) }/> }/>
   <Route path="LoginOwnerComponent" element={<LoginOwnerComponent login={ (newJWT) => setOwnerJwt(newJWT) }/> }/>
   <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
   <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
   <Route path="HomePageOwnerComponent" element={<HomepageOwnerComponent/>}/>

  </>

  if (ownerJwt != null) {
    ownerRoutes = <>
      <Route path="ListCoursesComponent" element={<ListCoursesComponent/>}/>
      <Route path="CreateCoursesComponent" element={<CreateCoursesComponent/>}/>
      <Route path="ListCustomerComponent" element={<ListCustomerComponent/>}/>
      <Route path="ListOwnerComponent" element={<ListOwnerComponent/>}/>
      <Route path="ListRestaurantComponent" element={<ListRestaurantComponent/>}/>
      <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
      <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
      <Route path="CreateRestaurantComponent" element={<CreateRestaurantComponent/>}/>
      <Route path="CreationSuccesfull" element={<CreationSuccesfull/>}/>
      <Route path="SearchRestaurant" element={<SearchRestaurant/>}/>
      <Route path="SearchCourses" element={<SearchCourses/>}/>
      <Route path="CreateCoursesComponent" element={<CreateCoursesComponent/>}/>
      <Route path="HomepageOwnerComponent" element={<HomepageOwnerComponent/>}/>

    </>
  }

  let ownerLinks = <> 

  <Link to="/CreateCustomerComponent"><div>Create customer</div></Link>
   <Link to="/CreateOwnerComponent"><button type="button" class="btn btn-light btn-lg ">Create owner</button></Link>
   <Link to="/CreateCoursesComponent"><button type="button" class="btn btn-light btn-lg ">Create Courses</button></Link>
   <Link to="/LoginComponent"><button type="button" class="btn btn-light btn-lg ">Login</button></Link>
   <Link to="/LoginOwnerComponent"><button type="button" class="btn btn-light btn-lg ">Login as a Owner</button></Link>

</>

if (ownerJwt != null) {
ownerLinks =<>
  <Link to="/ListRestaurantComponent"><div>Restaurant OWNER list</div></Link>
   <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
   <Link to="/ListOwnerComponent"><div>Restaurant owners</div></Link> 
   <Link to="/CreateCoursesComponent"><div>Create Courses</div></Link>
   <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
   <div><button type ="button" onClick={()=>setOwnerJwt(null)} >LOG OUT</button></div> 
   </>
}



  return (
    <BrowserRouter>
     
    <Routes>
      <Route path="/" element={ <HomepageComponent userLoggedIn={userJwt != null} logout={() =>setUserJwt(null)}/>}/>
      <Route path="/HomepageOwnerComponent" element={ <HomepageOwnerComponent ownerLoggedIn={ownerJwt != null} logout={() =>setOwnerJwt(null)}/>}/>
      {authRoutes} {ownerRoutes}
      <Route path="*" element={<HomepageComponent userLoggedIn={userJwt != null}/>}/>
    </Routes>


  
  </BrowserRouter>
    
  );
}

export default App;
