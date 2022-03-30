
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
import LoginOwnerComponent from './components/LoginOwnerComponent'
import HomepageOwnerComponent from './components/HomepageOwnerComponent';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown, Carousel} from "react-bootstrap";




function App() {


  const [userJwt, setUserJwt] = useState(null);

  let authRoutes = <>
   <Route path="LoginComponent" element={<LoginComponent login={ (newJWT) => setUserJwt(newJWT) }/> }/>
   <Route path="LoginOwnerComponent" element={<LoginOwnerComponent login={ (newJWT) => setUserJwt(newJWT) }/> }/>
   <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
   <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
   <Route path="CreateCoursesComponent" element={<CreateCoursesComponent/>}/>
   <Route path="HomePageOwnerComponent" element={<HomepageOwnerComponent/>}/>

  </>
//Jos on täällä niin päästää sisään kun kirjauutnut
  if (userJwt != null) {
    authRoutes = <>
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
      <Route path="HomepageOwnerComponent" element={<HomepageOwnerComponent/>}/>
     

    </>
  }
//kun ei ole kirjautunut Yläpalkki
  let authLinks = <> 
   <Link to="/CreateCustomerComponent"><div>Create customer</div></Link>
        <Link to="/CreateOwnerComponent"><div>Create owner</div></Link>
        <Link to="/CreateCoursesComponent"><div>Create Courses</div></Link>
        <Link to="/LoginComponent"><div>Login</div></Link>
        <Link to="/LoginOwnerComponent"><div>Login as a Owner</div></Link>

  
  </>
//Näkyy kun kirjautunut sisään, Yläpalkki
  if (userJwt != null) {
    authLinks =<>
       <Link to="/ListRestaurantComponent"><div>Restaurant list</div></Link>
        <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
        <Link to="/HomepageOwnerComponent"><div>HomepageOwner</div></Link>
        <Link to="/ListOwnerComponent"><div>Restaurant owners</div></Link> 
        <Link to="/CreateCoursesComponent"><div>Create Courses</div></Link>
        <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
        <div><button type ="button" onClick={()=>setUserJwt(null)} >LOG OUT</button></div>
        </>
  }
  return (
    <BrowserRouter>
    <div >
      <div className="navbar1">
        
        <Link to="/"><div>Home</div></Link> 
        {authLinks}
      </div>
      <Routes>
        <Route path="/" element={ <HomepageComponent userLoggedIn={userJwt != null} logout={() =>setUserJwt(null)}/>}/>
        {authRoutes}
        <Route path="*" element={<HomepageComponent userLoggedIn={userJwt != null}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
