import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

export default function CreationSuccesfull() {
  return (
      <div className="container">
    <h1>Creation succesfully !</h1>
    <Link to="/HomepageOwnerComponent"><button type="button" class="btn btn-primary btn-lg ">Back to homepage</button></Link>
    </div>
  )
}
