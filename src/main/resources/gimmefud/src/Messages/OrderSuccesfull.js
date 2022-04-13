import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

export default function OrderSuccesfull() {
  return (
      <div className="container">
    <h1>Thank you, your order is made succesfully !</h1>
    <Link to="/"><button type="button" class="btn btn-primary btn-lg ">Back to homepage</button></Link>
    </div>
  )
}
