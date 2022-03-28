
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
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';




function App() {


  const [userJwt, setUserJwt] = useState(null);

  let authRoutes = <>
   <Route path="LoginComponent" element={<LoginComponent login={ (newJWT) => setUserJwt(newJWT) }/> }/>
   <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
   <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
   <Route path="CreateCoursesComponent" element={<CreateCoursesComponent/>}/>
   
  </>

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
    </>
  }

  let authLinks = <>
   <Link to="/CreateCustomerComponent"><div>Create customer</div></Link>
        <Link to="/CreateOwnerComponent"><div>Create owner</div></Link>
        <Link to="/CreateCoursesComponent"><div>Create course</div></Link>
        <Link to="/LoginComponent"><div>Login</div></Link>
  
  </>

  if (userJwt != null) {
    authLinks = <>
       <Link to="/ListRestaurantComponent"><div>Restaurant list</div></Link>
       <Link to="/ListCoursesComponent"><div>Courses list</div></Link>
        <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
        <Link to="/ListOwnerComponent"><div>Restaurant owners</div></Link> 
        <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
        <Link to="/CreateCoursesComponent"><div>Create course</div></Link>
    </>
  }
  return (
    <BrowserRouter>
    <div >
      <div className="navbar">
        <Link to="/"><div>Home</div></Link>
        {authLinks}
      </div>
      <Routes>
        <Route path="/" element={ <HomepageComponent userLoggedIn={userJwt != null}/>}/>
        {authRoutes}
        <Route path="*" element={<HomepageComponent userLoggedIn={userJwt != null}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
