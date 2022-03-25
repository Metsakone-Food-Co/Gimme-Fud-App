import { useState } from 'react'
import { Link, useParams} from "react-router-dom";
import OwnerService from '../services/OwnerService'

const CreateOwner = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[address, setAddress] = useState('');
    const[phone_number, setPhone_number] = useState('');
    const {owner_id} = useParams();
 

    const saveOwner = (o) => {
        o.preventDefault();
        
        const owner = {username, password, fname, lname, address, phone_number};
        OwnerService.create(owner)
        .then(response => {
            console.log("restaurant owner added successfully", response.data);
            //history.push("/");
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }
    return(
        <div className="container">
            <h3>Create Restaurant Owner</h3>
            <hr/>
            <form>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="uname"
                        value={username}
                        onChange={(o) => setUsername(o.target.value)}
                        placeholder="Enter username"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="pword"
                        value={password}
                        onChange={(o) => setPassword(o.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="fname"
                        value={fname}
                        onChange={(o) => setFname(o.target.value)}
                        placeholder="Enter first name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="lname"
                        value={lname}
                        onChange={(o) => setLname(o.target.value)}
                        placeholder="Enter last name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="address"
                        value={address}
                        onChange={(o) => setAddress(o.target.value)}
                        placeholder="Enter address"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="pnumber"
                        value={phone_number}
                        onChange={(o) => setPhone_number(o.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>
                <div >
                    <button onClick={(o) => saveOwner(o)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            
        </div>
    )
}

export default CreateOwner;