import React from 'react'

export default function CreateCustomerComponent() {


  return (
    <div className=""> 
        <h1> Create account  </h1>
    <div className="">
    <form action="/" method="get" class = "row g-3">
    <label htmlFor="header-search">
    </label>

<div class = "col-md-6">
    <label for = "inputEmail4" class="form-label">Username</label>
    <input
    type="email"
    class="form-control"
    id="inputEmail4"
    placeholder="Username"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputPassword4" class="form-label">Password</label>
    <input
    type="Password"
    class="form-control"
    id="inputPassword4"
    placeholder="Password"
    name="s" 
    />
</div>

<div class = "col-12">
    <label for = "inputAddress" class="form-label">Address</label>
    <input
    type="text"
    class="form-control"
    id="inputAddress"
    placeholder="SomeAddress 69"
    name="s" 
    />
</div>

<div class = "col-12">
    <label for = "inputAddress2" class="form-label">Address 2</label>
    <input
    type="text"
    class="form-control"
    id="inputAddress2"
    placeholder="Hellhole Appartment-complex"
    name="s" 
    />
</div>

<div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input
     type="text" 
     class="form-control" 
     id="inputCity" />
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label">Region</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Turku</option>
      <option>Somewhere else..</option>
    </select>
  </div>

  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input
     type="text" 
     class="form-control"
      id="inputZip" />
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input"
       type="checkbox" id="gridCheck" />
      <label class="form-check-label"
       for="gridCheck">
        My information is correct
      </label>
    </div>
  </div>
<div class="col-12">
    <button type="submit" class = "btn btn-primary">Add me</button>

    </div>   
    </form>
                
                
                 </div>
        </div>
  )
}
