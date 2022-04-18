import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Customercreated() {
  return (
      <div className="container">
    <h1>Creation succesfull !</h1>
    <Link to="/HomepageComponent"><button type="button" class="btn btn-primary btn-lg ">Back to homepage</button></Link>
    </div>
  )
}
