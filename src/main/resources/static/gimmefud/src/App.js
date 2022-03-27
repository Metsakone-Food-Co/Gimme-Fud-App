
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
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import {card} from "react-bootstrap";





function App() {

  return (
    <BrowserRouter>
    <div >
      <div className="navbar">
        <Link to="/"><div>Home</div></Link>
        <Link to="/ListRestaurantComponent"><div>Restaurant list</div></Link>
        <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
        <Link to="/ListOwnerComponent"><div>Restaurant owners</div></Link>
        <Link to="/ListCoursesComponent"><div>Course list</div></Link>
        <Link to="/CreateCoursesComponent"><div>Create course</div></Link>
        <Link to="/CreateCustomerComponent"><div>Create customer</div></Link>
        <Link to="/CreateOwnerComponent"><div>Create owner</div></Link>
        <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
       
        


      </div>
      <Routes>
        <Route path="/" element={ <HomepageComponent/>}/>
        <Route path="ListCustomerComponent" element={<ListCustomerComponent/>}/>
        <Route path="ListRestaurantComponent" element={<ListRestaurantComponent/>}/>
        <Route path="ListOwnerComponent" element={<ListOwnerComponent/>}/>
        <Route path="ListCoursesComponent" element={<ListCoursesComponent/>}/>
        <Route path="CreateCustomerComponent" element={<CreateCustomerComponent/>}/>
        <Route path="CreateOwnerComponent" element={<CreateOwnerComponent/>}/>
        <Route path="CreateRestaurantComponent" element={<CreateRestaurantComponent />}/>
        <Route path="CreateCoursesComponent" element={<CreateCoursesComponent />}/>
        
        

      </Routes>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
