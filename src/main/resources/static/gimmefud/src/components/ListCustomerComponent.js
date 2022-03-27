import { useEffect, useState } from 'react';
import CustomerService from '../services/CustomerService';

const ListCustomerComponent = () => {

  const [customers, setCustomers] = useState([]);

  const init = () => {
    CustomerService.getAll()
      .then(response => {
        console.log('Printing customer data', response.data);
        setCustomers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

 
  

  return (
    <div className="container">
      <h3>List of Customers</h3>
      <hr/>
      <div>
  
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Role</th>


            </tr>
          </thead>
          <tbody>
          {
            customers.map(customer => (
              <tr key={customer.customerId}>
                <td>{customer.username}</td>
                <td>{customer.password}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.address}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.role}</td>




              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default ListCustomerComponent