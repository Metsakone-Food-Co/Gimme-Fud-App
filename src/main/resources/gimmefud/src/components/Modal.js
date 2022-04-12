import React from 'react'
import { Link } from 'react-router-dom'
import '../Modal.css'

export default function Modal(props) {
 

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button>X</button>
        <div className="title">
          <h2>Kiitos ostoksen teosta</h2>
      <div className="body">
        <p>tilauksesi saapuu piakkoin </p>

      </div>
        <div className="footer">
         <Link to="/HomepageComponent"><button>Back to homepage</button></Link> 
       <div>
     
       
        </div>
        </div>
        </div>
      </div>






    </div>



  )

}


    


