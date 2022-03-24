import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OwnerService from '../services/OwnerService';

const ListOwnerComponent = () => {

  const [owners, setOwners] = useState([]);

  const init = () => {
    OwnerService.getAll()
      .then(response => {
        console.log('Printing restaurant owners', response.data);
        setOwners(response.data);
      })
      .catch(error => {
        console.log('vituiksmän', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <div className="container">
      <h3>List of Restaurant Owners</h3>
      <hr/>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Owner ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
          {
            owners.map(owner => (
              <tr key={owner.owner_id}>
                <td>{owner.owner_id}</td>
                <td>{owner.username}</td>
                <td>{owner.password}</td>
                <td>{owner.fname}</td>
                <td>{owner.lname}</td>
                <td>{owner.address}</td>
                <td>{owner.phone_number}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default ListOwnerComponent;