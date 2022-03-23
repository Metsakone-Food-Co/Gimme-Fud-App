import React, { useState, useEffect } from 'react'
import CustomerService from '../services/CustomerService'
import {Link} from 'react-router-dom'

const ListCustomerComponent = () => {

 const [customer, setCustomer] = useState([])

 useEffect(() => {

    CustomerService.getAllCustomers().then((response) => {
        setCustomer(response.data)
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })

 }, [])
 

  return (
    <div className="container">
        <h2 className="text-center"> List Customers</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Customer Id</th>
                <th>Customer Username</th>
                <th>Customer Password</th>
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Customer Address</th>
                <th>Customer Phone number</th>
            </thead>
            <tbody> 
                {
                    customer.map(
                        customer =>
                        <tr key = {customer.customerId}>
                            <td>{customer.customerId}</td>
                            <td>{customer.username}</td>
                            <td>{customer.password}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phoneNumber}</td>

                        </tr>
                    )
                
                }
                
                </tbody>

        </table>
    </div>
  )
}

export default ListCustomerComponent