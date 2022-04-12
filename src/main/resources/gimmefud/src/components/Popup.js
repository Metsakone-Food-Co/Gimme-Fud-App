import React from 'react'
import { Link } from 'react-router-dom'
import '../Modal.css'

const Modal = props => {

 

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>jx</span>
   {/*  <div>   
        <input
      type="button"
      value="Click to Open Popup"
      onClick={props.handleClose}
    />
    </div> */}
   
      </div>
    </div>
  );
};
 
export default Modal;


    


