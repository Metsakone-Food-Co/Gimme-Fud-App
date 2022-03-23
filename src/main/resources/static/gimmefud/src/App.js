
import './App.css';
import HomepageComponent from './components/HomepageComponent'
import ListCustomerComponent from './components/ListCustomerComponent'
import ListRestaurantComponent from './components/ListRestaurantComponent'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div >
      <div className="navbar">
        <Link to="/"><div>Home</div></Link>
        <Link to="/ListRestaurantComponent"><div>Restaurant list</div></Link>
        <Link to="/CreateRestaurantComponent"><div>Create restaurant</div></Link>
        <Link to="/ListCustomerComponent"><div>Customer list</div></Link>
      </div>
      <Routes>
        <Route path="/" element={ <HomepageComponent/>}/>
        <Route path="ListCustomerComponent" element={<ListCustomerComponent/>}/>
        <Route path="ListRestaurantComponent" element={<ListRestaurantComponent/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
